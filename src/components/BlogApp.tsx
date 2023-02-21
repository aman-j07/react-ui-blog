import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Blog from "./Blog";
import { Route, Routes } from "react-router-dom";

function BlogApp() {
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

export default BlogApp;
