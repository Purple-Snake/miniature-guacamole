const User = require("../models/user");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.post("/postUser", async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      res.status(400).json({ errorMessage: "please fill out all fields." });
    }

    if (password.length < 8) {
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 8 characters.",
      });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      try {
        User.create({
          userName,
          password: hash,
        });

        res.status(200).json({ message: "User succesfully created." });
      } catch (error) {
        res.status(500).json({ errorMessage: "could not created user." });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });
    }

    const existingUser = await User.findOne({ userName });

    if (!existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "Wrong user name or password" });
    }

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordCorrect) {
      return res
        .status(400)
        .json({ errorMessage: "Wrong user name or password" });
    }

    const token = JWT.sign(
      {
        userName: existingUser.userName,
      },
      process.env.JWT_Secret
    );
    console.log(token);

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    console.log();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json(false);
    }

    JWT.verify(token, process.env.JWT_Secret);

    return res.send(true);
  } catch {
    res.json(false);
  }
});

module.exports = router;
