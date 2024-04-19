const router = require("express").Router();
const ItemsOnSale = require("../models/itemsOnSale");
const JWT = require("jsonwebtoken");

router.post("/postItem", async (req, res) => {
  try {
    const { itemName, itemAmount } = req.body;

    const token = req.cookies.token;

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      if (!itemName) {
        res.status(400).json({ errorMessage: "Item name required." });
      }
      if (!itemAmount) {
        res.status(400).json({ errorMessage: "Item amount required." });
      }

      let id = createId();

      await ItemsOnSale.create({
        id: id,
        itemName: itemName.trim(),
        itemAmount: itemAmount,
      });

      return res.status(200).json({ message: "item created" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getItems", async (req, res) => {
  try {
    const postedItems = await ItemsOnSale.find();
    res.status(200).json(postedItems);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/updateItem", async (req, res) => {
  try {
    const { _id, itemName, itemAmount } = req.body;

    const token = req.cookies.token;

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      await ItemsOnSale.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            itemName: itemName.trim(),
            itemAmount: itemAmount,
          },
        },
        { new: true }
      );

      res.status(200).json({ message: "Item updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteItem/:id", async (req, res) => {
  try {
    const ItemObjectId = req.params.id;

    const token = req.cookies.token;

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      await ItemsOnSale.findOneAndDelete({ _id: ItemObjectId});

      res.status(200).json({ message: "Item deleted successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

function createId() {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

module.exports = router;
