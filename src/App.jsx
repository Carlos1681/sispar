import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Refunds from "./components/refunds/Refunds.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import "./global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolsos" element={<Refunds />} />
        <Route path="/solicitacao" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
