import { useEffect } from "react";
import { default as placeHolderData } from "../data/placeholderData.json";
import Card from "./Card";

function Cards() {
  useEffect(() => {
    console.log(placeHolderData);
  }, []);
  return (
    <>
      <div>Hello</div>
      {placeHolderData.map((items) => (
        <div key={items.id}>
          <Card item={items} />
        </div>
      ))}
    </>
  );
}

export default Cards;
