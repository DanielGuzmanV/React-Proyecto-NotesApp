import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotePage from "../pages/NotePage";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/notes" element={<NotePage/>}/>
    </Routes>
  )
}

export default MyRoutes

