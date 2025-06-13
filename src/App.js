import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { CryptoDetails } from "./components/CryptoDetails";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CryptoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
