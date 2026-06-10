import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MovieCatalog from "./pages/MovieCatalog";
import Booking from "./pages/Booking";
import SeatAllocation from "./pages/SeatAllocation";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            padding: "15px",
            backgroundColor: "#222",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Login
          </Link>

          <Link to="/dashboard" style={{ color: "white" }}>
            Dashboard
          </Link>

          <Link to="/movies" style={{ color: "white" }}>
            Movies
          </Link>

          <Link to="/booking" style={{ color: "white" }}>
            Booking
          </Link>

          <Link to="/seats" style={{ color: "white" }}>
            Seats
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/movies" element={<MovieCatalog />} />

          <Route path="/booking" element={<Booking />} />

          <Route path="/seats" element={<SeatAllocation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;