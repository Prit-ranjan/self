import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Heartbeat from "./heartbeat/Heartbeat";
import Message from "./message/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heartbeat />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
