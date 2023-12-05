import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./App.css";

import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import Post from "./pages/Post/Post";
import Download from "./pages/Download/Download";
import Total from "./pages/Total/Total";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Total" element={<Total />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
