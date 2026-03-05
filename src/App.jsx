import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battletracker from "./pages/Battlettracker";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/battletracker" element={<Battletracker />} />
      </Routes>
    </BrowserRouter>
  );
}
