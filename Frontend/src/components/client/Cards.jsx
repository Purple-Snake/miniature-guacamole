import { useContext } from "react";
import { ListingContext } from "../../context/ListingContext";
import Card from "./Card";

function Cards() {
  const { filteredItems } = useContext(ListingContext);
  return (
    <>
      <div>Hello</div>
      {filteredItems.map((items) => (
        <div key={items.id}>
          <Card item={items} />
        </div>
      ))}
    </>
  );
}

export default Cards;
