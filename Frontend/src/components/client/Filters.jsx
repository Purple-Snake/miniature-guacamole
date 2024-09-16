import { useContext } from "react";
import { ListingContext } from "../../context/ListingContext";

function Filters() {
  const { listedItems, setSelectedFilter } = useContext(ListingContext);

  function createTypeSet(listedItemsArray) {
    let typesSet = new Set();
    listedItemsArray.forEach((item) => {
      typesSet.add(item.type);
    });
    return Array.from(typesSet);
  }

  function handleFilterSelection(event) {
    let value = event.target.value;

    if (!event.target.checked) {
        setSelectedFilter("");
    } else {
        setSelectedFilter(value);
    }

  }

  return (
    <>
      <div>
        {createTypeSet(listedItems).map((type) => (
          <div key={type}>
            <input type="checkbox" id={`filter-${type}`} value={type} onChange={(e) => handleFilterSelection(e)}/>
            <label htmlFor={`filter-${type}`}>{type}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
