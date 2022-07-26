import './components.css';

function Activity({ data }) {
  const date = new Date(data.updatedAt);

  return (
    <li>
      <p className="activities">
        <span className="red-text">{data.user.username}</span> added{' '}
        <span className="red-text">{data.title.title}</span>
        {data.activityType !== 'favorite' ? 'to watch later' : 'to favorites'} - {date.toDateString()}
      </p>
    </li>
  );
}

export default Activity;
