import Home from "./Components/Home";
import Model from "./Components/Model";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
