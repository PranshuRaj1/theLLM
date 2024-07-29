import Home from "./Components/Home";
import Model from "./Components/Model";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Test from "./Components/Test";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
