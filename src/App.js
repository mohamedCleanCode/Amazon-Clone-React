import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
