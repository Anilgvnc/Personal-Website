import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Projects from "./pages/Projects";
import Router from "./components/Router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />}>
          <Route index element={<Home />} />
          <Route path="Accounts" element={<Accounts />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
