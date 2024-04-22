import { useState } from "react";
import axios from "axios"

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState(0);
  const [itemType, setItemType] = useState("");
  const [itemQuality, setItemQuality] = useState("Normal quality");
  const [itemCategory, setItemCategory] = useState("");
  const [itemOrigin, setItemOrigin] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: itemName,
      amount: itemAmount,
      type: itemType,
      quality: itemQuality, 
      category: itemCategory,
      origin: itemOrigin,
      price: itemPrice,
    }
    
    await axios.post("http://localhost:3000/items/postItem", formData)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item-name">Item name:</label>
          <input
            type="text"
            id="item-name"
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item-amount">Item amount:</label>
          <input
            type="number"
            id="item-amount"
            onChange={(e) => setItemAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="item-type">Item type:</label>
          <select id="item-type" onChange={(e) => setItemType(e.target.value)}>
            <option value="----">----</option>
            <option value="weapon">weapon</option>
            <option value="resource">resource</option>
          </select>
        </div>
        <div>
          <label htmlFor="item-quality">Item quality:</label>
          <select
            id="item-quality"
            onChange={(e) => setItemQuality(e.target.value)}
          >
            <option value="Normal quality">Normal quality</option>
            <option value="High quality">High quality</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            onChange={(e) => setItemCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            onChange={(e) => setItemOrigin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" id="submit" />
        </div>
      </form>
    </>
  );
}

export default AddItem;
