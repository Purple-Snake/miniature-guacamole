import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import axios from "axios";

export const ListingContext = createContext();


export const ListingContextProvider = ({ children }) => {
    const [listedItems, setListedItems] = useState([])
    const [query, setQuery] = useState("")

    async function getListedItems() {
        try {
        const response = await axios.get("http://localhost:3000/items/getItems");
        setListedItems(response.data);
        } catch(error) {
            console.error("Error fetching listed items")
            console.log(error);
        }
    }

    useEffect(() => {
        getListedItems()
    }, [])

    const filteredItems = listedItems.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
    })

    const contextValue = {listedItems, getListedItems, setQuery, filteredItems};
    return (<ListingContext.Provider value={contextValue}>{children}</ListingContext.Provider>);
}

ListingContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListingContextProvider;