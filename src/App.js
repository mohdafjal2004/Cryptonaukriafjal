import "./App.css";
import Signup1 from "./components/Signup1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup2 from "./components/Signup2";
import Signup3 from "./components/Signup3";
import Signup4 from "./components/Signup4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/signup4" element={<Signup4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
