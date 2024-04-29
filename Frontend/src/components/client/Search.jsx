import { useContext } from "react";
import { ListingContext } from "../../context/ListingContext";


function Search() {
    const {setQuery} = useContext(ListingContext)

    return ( 
        <>
            <input type="search" onChange={(e) => setQuery(e.target.value)}/>
        </>
     );
}

export default Search;