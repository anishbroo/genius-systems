import "./App.css";
import Header from "./components/smart/header";
import Dashboard from "./components/smart/dashboard";
import Footer from "./components/dumb/footerSection/footerView";
import Features from "./components/smart/features";
import HoverDetails from "./components/smart/hoverDetails";
import Gears from "./components/smart/gears";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meeting from "./components/smart/meeting";

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
