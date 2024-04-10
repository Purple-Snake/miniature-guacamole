import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListingContextProvider from "./context/ListingContext";
import MainPage from "./components/client/MainPage";
import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <>
      <ListingContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </ListingContextProvider>
    </>
  );
}

export default App;
