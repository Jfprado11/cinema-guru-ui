import './dashboard.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="Dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/favorites" element={<h1>Favorite</h1>} />
          <Route path="/watchlater" element={<h1>Watch later</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
