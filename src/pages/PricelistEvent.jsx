import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const priceItems = [
  { time: 'Half Day', price: '1.5M', drive: '14 day', grading: 'All Files' },
  { time: 'Full Day', price: '2.5M', drive: '21 day', grading: 'All Files' }
];

const PricelistEvent = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Event Documentation</h1>
      </div>
      
      <div className="price-subtitle-pill">
        <span>Birthday . Seminar . Gathering</span>
      </div>

      <div className="price-cards-stack">
        {priceItems.map((item, i) => (
          <PriceCard key={i} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default PricelistEvent;
