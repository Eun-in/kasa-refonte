import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import House from "./components/home/House";
import About from "./components/services/About";
import NotFound from "./components/notFound/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="housing/:id" element={<House />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
