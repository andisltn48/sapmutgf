import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const priceItems = [
  { time: '1 hour', price: '135k', drive: '5 day', grading: '5 Color' },
  { time: '2 hour', price: '245k', drive: '10 day', grading: '10 Color' },
  { time: '3 hour', price: '350k', drive: '18 day', grading: '20 Color' }
];

const PricelistPersonal = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Personal Photoshoot</h1>
      </div>
      
      <div className="price-subtitle-pill">
        <span>Birthday . Concept . Traveling</span>
      </div>

      <div className="price-cards-stack">
        {priceItems.map((item, i) => (
          <PriceCard key={i} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default PricelistPersonal;
