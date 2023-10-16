import Home from "./components/Home";
import Pricing from "./components/Pricing"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Pricing />} path="/pricing" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
