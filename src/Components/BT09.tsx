import Login from "./Login";
import Register from "./Register";
import { Route, Router, Routes } from "react-router-dom";
export default function BT09() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}
