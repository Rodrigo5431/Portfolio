  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
  import AuthProvider from "../Context/Auth";
  import DarkProvider from "../Context/DarkContext";
  import Home from "../Pages/Home/index";
  import Login from "../Pages/Login";
  import Projects from "../Pages/Projects";

  export default function AppRoutes() {
    return (
      <Router>
        <AuthProvider>
          <DarkProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </DarkProvider>
        </AuthProvider>
      </Router>
    );
  }
