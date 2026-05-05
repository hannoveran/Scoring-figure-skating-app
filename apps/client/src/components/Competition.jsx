import { Link } from 'react-router-dom';
import '../styles/Competitions.css';

function Competition({ comp, onDelete, onEdit }) {
  return (
    <div className="competition shadow-md">
      <Link to={`/competition/${comp.id}`} className="competition-card">
        <div className="name-status">
          <h3 className="competition-name">{comp.name}</h3>
          <div className={`competition-status ${comp.status || 'unknown'}`}>
            {comp.status ? comp.status.replace('_', ' ') : 'unknown'}
          </div>
        </div>

        <div className="location-dates">
          <p>{comp.location}</p>
          <p>{new Date(comp.date).toLocaleDateString()}</p>
        </div>

        <div className="tags">
          <div className="tag">
            {comp.category === 'men_single'
              ? "Men's Singles"
              : comp.category === 'women_single'
                ? "Women's Singles"
                : 'Unknown'}
          </div>

          <div className="tag">
            {comp.segment === 'short_program'
              ? 'Short Program'
              : comp.segment === 'free_skate'
                ? 'Free Skate'
                : 'Unknown'}
          </div>
        </div>
      </Link>

      <div className="competition-actions">
        <button onClick={() => onEdit(comp)}>Edit</button>
        <button onClick={() => onDelete(comp.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Competition;
