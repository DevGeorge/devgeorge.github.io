import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomeLayout from "./pages/layouts/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
{
  /* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>Github Page still under construction, Please come back later</p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
  <img src="/images/IMG_8070.png" alt="" />
  <img src="/images/IMG_8071.png" alt="" />
  <img src="/images/IMG_8072.png" alt="" />
  <img src="/images/IMG_8073.png" alt="" />
</header>
</div> */
}
export default App;
