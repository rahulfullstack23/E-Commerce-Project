import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/store" element={<Store />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;