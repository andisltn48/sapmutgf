import PillButton from '../components/PillButton';
import { Link } from 'react-router-dom';

const Pricelist = () => (
  <div className="price-page">
    <div className="button-group">
      <Link to="/" className="back-link">← Back to Home</Link>
      <PillButton to="/pricelist/personal">Personal</PillButton>
      <PillButton to="/pricelist/couple">Couple</PillButton>
      <PillButton to="/pricelist/graduation">Graduation</PillButton>
      <PillButton to="/pricelist/event">Event</PillButton>
    </div>
  </div>
);

export default Pricelist;
