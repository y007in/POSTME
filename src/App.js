import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./routes/Main/Main";
import MyPage from "./routes/MyPage/MyPage";
import Post from "./routes/Post/Post";
import Download from "./routes/Download/Download";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
