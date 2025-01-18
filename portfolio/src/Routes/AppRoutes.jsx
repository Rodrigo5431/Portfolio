import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Pages/Home/index";
import DarkProvider from "../Context/DarkContext";
import Projects from "../Pages/Projects";

export default function AppRoutes() {
  return (
    <Router>
      <DarkProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </DarkProvider>
    </Router>
  );
}
