import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Pages/Home/index";
import DarkProvider from "../Context/DarkContext";
import Projects from "../Pages/Projects";
import About from "../Components/About";
import AuthProvider from "../Context/Auth";

export default function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <DarkProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutMe" element={<About />} />
          </Routes>
        </DarkProvider>
      </AuthProvider>
    </Router>
  );
}
