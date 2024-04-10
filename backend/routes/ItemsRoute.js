const router = require("express").Router();
const ItemsOnSale = require("../models/itemsOnSale")


router.post("/postItem", async (req, res) => {
    try {
        //logs for debuging
        console.log("post started");
        const { itemName, itemAmount } = req.body;

        if(!itemName) {
            res.status(400).json({errorMessage: "Item name required."});
        }
        if (!itemAmount) {
            res.status(400).json({errorMessage: "Item amount required."});
        }

        let id = createId();

        const newItem = await ItemsOnSale.create({
            id: id,
            itemName: itemName.trim(),
            itemAmount: itemAmount,
        })
        console.log(newItem);

        return res.status(200).json({message: "item created"})
        
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
})



function createId() {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return id
}

module.exports = router;