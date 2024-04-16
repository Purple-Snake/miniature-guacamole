import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListingContextProvider from "./context/ListingContext";
import MainPage from "./components/client/MainPage";
import AdminLogin from "./components/admin/AdminLogin";
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
              {/* <Route path="/adminNav" element={}/> */}
            </>
          )}
        </Routes>
      </ListingContextProvider>
    </>
  );
}

export default App;
