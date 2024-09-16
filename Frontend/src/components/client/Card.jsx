import PropTypes from "prop-types";

function Card({ item }) {
  return (
    <>
      <div key={item.id}>
        <img src={item.itemPicture} alt={item.name} style={{width:100}}/>
        <div>Item name: {item.name}</div>
        <div>Amount: {item.amount}</div>
        <div>Type: {item.type}</div>
        <div>Quality: {item.quality}</div>
        <div>Category: {item.category}</div>
        <div>Origin: {item.origin}</div>
        <div>Price: {item.price}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
