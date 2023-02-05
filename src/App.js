import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <div className="custome-container">
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
