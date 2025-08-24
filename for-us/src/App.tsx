import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Heartbeat from "./heartbeat/Heartbeat";
import Message from "./message/Message";

function App() {
  return (
    <HashRouter basename="/self">
      <Routes>
        <Route path="/" element={<Heartbeat />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
