import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Home from "./pages/Home";
import NavMenu from "./components/NavMenu";
import PostSingle from "./pages/PostSingle";
import Loading from "./components/Loading";

function App() {
  return (
    <>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/loading" element={<Loading />}/>
      <Route path="/posts/:id" element={<PostSingle />}/>
    </Routes>
    </>
  );
}

export default App;
