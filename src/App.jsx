import "./App.css";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Features from "./components/features";
import HoverDetails from "./components/hoverDetails";
import Gears from "./components/gears";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meeting from "./components/meeting";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard />
              <HoverDetails />
              <Features />
            </>
          }
        />
        <Route path="/gears" element={<Gears />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
