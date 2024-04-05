import PropTypes from "prop-types";

function Card({ item }) {
  return (
    <>
      <div key={item.id}>
        <img src={item.itemPicture} alt={item.ItemName} style={{width:100}}/>
        <div>Item name: {item.itemName}</div>
        <div>Amount: {item.itemAmount}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
