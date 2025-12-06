import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="flex justify-center items-center w-[80%] h-auto bg-blue-500 text-white p-6 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="text-left">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Day Counter App!</h2>
       </div>
      </div>
    </div>
  );
};

export default App;