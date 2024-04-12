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

router.get("/login", async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).json({ errorMessage: "Please enter all required fields" });
  }

  const existingUser = await User.findOne({ userName });

  if (!existingUser) {
    return res.status(400).json({ errorMessage: "Wrong email or password" });
  }

  const passwordCorrect = await bcrypt.compare(password, existingUser.password);

  if (!passwordCorrect) {
    return res.status(401).json({ errorMessage: "Wrong email or password" });
  }

  const token = JWT.sign(
    {
      userName: existingUser.userName,
    },
    process.env.JWT_Secret
  );
  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .send();
});

router("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

module.exports = router;
