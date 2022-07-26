import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

import Activity from '../Activity';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';

import { API_URL } from '../../App';

function SideBar() {
  const [selected, setSelected] = useState('Home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigation = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    if (pageName === 'Watch Later') {
      navigation('/watchlater');
    } else if (pageName === 'Favorites') {
      navigation('/favorites');
    } else {
      navigation('/home');
    }
  };

  const handleMouseOver = () => {
    setSmall(false);
  };

  const handleMouseOut = () => {
    setSmall(true);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .get(`${API_URL}/api/activity`, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        params: {},
      })
      .then((res) => res.data)
      .then((data) => {
        setActivities(data);
        if (data.length > 0) setShowActivities(true);
      })
      .catch((err) => console.err(err));
  }, []);

  return (
    <nav className={`SideBar ${small ? 'small' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ul className="navigation-sideBar">
        <li className={`${selected === 'Home' && 'selected-page'}`} onClick={() => setPage('Home')}>
          <FontAwesomeIcon icon={faFolder} />
          <span className="text-sideBar">Home</span>
          {selected === 'Home' && <FontAwesomeIcon icon={faArrowRight} className="select-icon" />}
        </li>
        <li className={`${selected === 'Favorites' && 'selected-page'}`} onClick={() => setPage('Favorites')}>
          <FontAwesomeIcon icon={faStar} />
          <span className="text-sideBar">Favorites</span>
          {selected === 'Favorites' && <FontAwesomeIcon icon={faArrowRight} className="select-icon" />}
        </li>
        <li className={`${selected === 'Watch Later' && 'selected-page'}`} onClick={() => setPage('Watch Later')}>
          <FontAwesomeIcon icon={faClock} />
          <span className="text-sideBar">Watch Later</span>
          {selected === 'Watch Later' && <FontAwesomeIcon icon={faArrowRight} className="select-icon" />}
        </li>
      </ul>
      {showActivities && (
        <ul className="sideBar-activities">
          <span className="title-activities">Latest Activities</span>
          {activities.slice(0, 10).map((item) => (
            <Activity data={item} />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SideBar;
