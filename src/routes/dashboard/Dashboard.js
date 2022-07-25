import './dashboard.css';

// components
import Header from '../../components/navigation/Header';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="Dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Dashboard;
