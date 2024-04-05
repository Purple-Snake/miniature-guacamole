import './App.css'
import { Route, Routes } from "react-router-dom"
import MainPage from './components/client/MainPage'
import AdminLogin from "./components/admin/AdminLogin"

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/admin" element={<AdminLogin/>} />
     </Routes>
    </>
  )
}

export default App
