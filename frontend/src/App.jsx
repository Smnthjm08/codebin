import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./components/utility/NavBar";
import NotFound from "./components/utility/NotFound";
import Layout from "./components/utility/Layout";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
