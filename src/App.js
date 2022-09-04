import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main/Main";
import Submain from "./routes/Main/Submain";
//import "react-calendar/dist/Calendar.css";
//import "./components/Calendar/Calendar.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/submain" element={<Submain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
