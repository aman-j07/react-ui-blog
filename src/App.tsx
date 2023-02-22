import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
