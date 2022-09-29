import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./App.css";

import Main from "./routes/Main/Main";
import MyPage from "./routes/MyPage/MyPage";
import Post from "./routes/Post/Post";
import Download from "./routes/Download/Download";
import Total from "./routes/Total/Total";

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
