import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Landing } from "./pages/Landing/Landing";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
