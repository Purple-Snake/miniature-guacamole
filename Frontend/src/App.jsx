import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListingContextProvider from "./context/ListingContext";
import MainPage from "./components/client/MainPage";
import AdminLogin from "./components/admin/AdminLogin";
import AdminNav from "./components/admin/AdminNav";
import EditPage from "./components/admin/edit page/EditPage";
import AddItem from "./components/admin/add Item page/AddItem";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios"

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <ListingContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          {loggedIn && (
            <>
              <Route path="/adminNav" element={<AdminNav/>}/>
              <Route path="/edit" element={<EditPage/>} />
              <Route path="/createItem" element={<AddItem/>} />
            </>
          )}
        </Routes>
      </ListingContextProvider>
    </>
  );
}

export default App;
