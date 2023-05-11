import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { BookablesPage } from "./components/Bookables/BookablesPage";
import { BookingsPage } from "./components/Bookings/BookingsPage";
import { UsersPage } from "./components/Users/UsersPage";
import { UserPicker } from "./components/Users/UserPicker";
import { Icon } from '@iconify/react';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/bookings">
              <Icon icon="uis:calender" />
              <span>Bookings</span>
            </Link>
            <Link to="/bookables">
              <Icon icon="fa6-solid:door-open" />
              <span>Bookables</span>
            </Link>
            <Link to="/users">
              <Icon icon="mdi:user" />
              <span>Users</span>
            </Link>
          </nav>
          <UserPicker />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
