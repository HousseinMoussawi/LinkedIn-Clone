import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Jobs from "./pages/Jobs";


const App = ()=> {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
