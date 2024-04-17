import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ListingContext } from "../../../context/ListingContext";
import axios from "axios"

function EditCard({ item }) {
  const [ editMode, setEditMode ] = useState(false);
  const [ itemName, setItemName ] = useState(item.itemName);
  const [ itemAmount, setItemAmount] = useState(item.itemAmount);

  const { getListedItems } = useContext(ListingContext)

  async function handleUpdate(objectId) {
    setEditMode(false)

    let updatedData = {
      _id: objectId,
      itemName: itemName,
      itemAmount: itemAmount,
    }

    try {
      await axios.patch("http://localhost:3000/items/updateItem", updatedData)
      getListedItems()
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
            <input type="text" defaultValue={item.itemName} onChange={(e) => setItemName(e.target.value)}/>
            <input type="number" defaultValue={item.itemAmount} onChange={(e) => setItemAmount(e.target.value)}/>
          </div>
          <div>
            <button onClick={() => handleUpdate(item._id)}>
              <img src="" alt="Done" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div key={item.id}>
            <img
              src={item.itemPicture}
              alt={item.ItemName}
              style={{ width: 100 }}
            />
            <div>Item name: {item.itemName}</div>
            <div>Amount: {item.itemAmount}</div>
          </div>
          <div>
            <button onClick={() => setEditMode(true)}>
              <img src="" alt="Edit" />
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
