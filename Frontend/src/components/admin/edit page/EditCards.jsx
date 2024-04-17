import { useContext } from "react";
import { ListingContext } from "../../../context/ListingContext";
import Card from "./EditCard";

function EditCards() {
  const { listedItems } = useContext(ListingContext);
  return (
    <>
      {listedItems.map((items) => (
        <div key={items.id}>
          <Card item={items} />
        </div>
      ))}
    </>
  );
}

export default EditCards;
