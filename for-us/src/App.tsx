import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Heartbeat from "./heartbeat/Heartbeat";
import Message from "./message/Message";

function App() {
  return (
    <BrowserRouter basename="/self">
      <Routes>
        <Route path="/" element={<Heartbeat />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
