import { BrowserRouter as Router, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
