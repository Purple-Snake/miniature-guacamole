import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ListingContext } from "../../../context/ListingContext";
import axios from "axios";

function EditCard({ item }) {
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [itemAmount, setItemAmount] = useState(item.amount);
  const [itemType, setItemType] = useState(item.type);
  const [itemQuality, setItemQuality] = useState(item.quality);
  const [itemCategory, setItemCategory] = useState(item.category);
  const [itemOrigin, setItemOrigin] = useState(item.origin);
  const [itemPrice, setItemPrice] = useState(item.price);

  const { getListedItems } = useContext(ListingContext);

  async function handleUpdate(objectId) {
    setEditMode(false);

    let updatedData = {
      _id: objectId,
      name: itemName,
      amount: itemAmount,
      type: itemType,
      quality: itemQuality,
      category: itemCategory,
      origin: itemOrigin,
      price: itemPrice,
    };

    try {
      await axios.patch("http://localhost:3000/items/updateItem", updatedData);
      getListedItems();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(objectId) {
    try {
      await axios.delete(`http://localhost:3000/items/deleteItem/${objectId}`);
      getListedItems();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {editMode ? (
        <>
          <div key={item.id}>
            <img
              src={item.itemPicture}
              alt={item.ItemName}
              style={{ width: 100 }}
            />
            <input
              type="text"
              defaultValue={item.name}
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="number"
              defaultValue={item.amount}
              onChange={(e) => setItemAmount(e.target.value)}
            />
            <select
              id="item-type"
              defaultValue={item.type}
              onChange={(e) => setItemType(e.target.value)}
            >
              <option value="weapon">weapon</option>
              <option value="resource">resource</option>
            </select>
            <select
              id="item-quality"
              defaultValue={item.quality}
              onChange={(e) => setItemQuality(e.target.value)}
            >
              <option value="Normal quality">Normal quality</option>
              <option value="High quality">High quality</option>
            </select>
            <input
              type="text"
              defaultValue={item.category}
              onChange={(e) => setItemCategory(e.target.value)}
            />
            <input
              type="text"
              defaultValue={item.origin}
              onChange={(e) => setItemOrigin(e.target.value)}
            />
            <input
              type="text"
              defaultValue={item.price}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div>
            <button onClick={() => handleUpdate(item._id)}>
              <img src="" alt="Done" />
            </button>
            <button onClick={() => setEditMode(false)}>
              <img src="" alt="Cancel" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div key={item.id}>
            <img
              src={item.itemPicture}
              alt={item.name}
              style={{ width: 100 }}
            />
            <div>Item name: {item.name}</div>
            <div>Amount: {item.amount}</div>
            <div>Type: {item.type}</div>
            <div>Quality: {item.quality}</div>
            <div>Category: {item.category}</div>
            <div>Origin: {item.origin}</div>
            <div>Price: {item.price}</div>
          </div>
          <div>
            <button onClick={() => setEditMode(true)}>
              <img src="#" alt="Edit" />
            </button>
            <button onClick={() => handleDelete(item._id)}>
              <img src="#" alt="Delete" />
            </button>
          </div>
        </>
      )}

      {/* <div key={item.id}>
         <img src={item.itemPicture} alt={item.ItemName} style={{width:100}}/>
         <div>Item name: {item.itemName}</div>
         <div>Amount: {item.itemAmount}</div>
       </div>
       <div>
         <button>
           <img src="" alt="Edit" />
         </button>
      </div> */}
    </>
  );
}

EditCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EditCard;
