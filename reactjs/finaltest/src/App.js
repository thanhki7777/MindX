import "./App.css";
import Header from "./components/header";
import Completed from "./pages/completed/completed";
import All from "./pages/all/all";
import Active from "./pages/active/active";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
        <Route path="/" element={<><Header /></>}/>
          <Route path="/all" element={<><Header /><All /></>}/>
          <Route path="/active" element={<><Header /><Active /></>}/>
          <Route path="/completed" element={<><Header /><Completed /></>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
