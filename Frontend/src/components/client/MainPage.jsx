import Cards from "./Cards";
import Filters from "./Filters";
import Search from "./Search";

function MainPage() {
    return ( 
        <>
            <Search/>
            <Filters/>
            <Cards/>
        </>
     );
}

export default MainPage;