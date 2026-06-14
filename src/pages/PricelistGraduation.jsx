import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const priceItems = [
  { time: 'Group 5-10', price: '500k', drive: '10 day', grading: '10 Color' },
  { time: 'Individual', price: '200k', drive: '5 day', grading: '5 Color' }
];

const PricelistGraduation = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Graduation</h1>
      </div>
      
      <div className="price-subtitle-pill">
        <span>Formal . Creative . Outdoor</span>
      </div>

      <div className="price-cards-stack">
        {priceItems.map((item, i) => (
          <PriceCard key={i} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default PricelistGraduation;
