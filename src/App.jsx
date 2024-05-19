import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHome from "./templates/AppHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
