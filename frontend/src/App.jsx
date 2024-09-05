import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./components/utils/NavBar";
import NotFound from "./components/utils/NotFound";
import Layout from "./components/utils/Layout";

export default function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
