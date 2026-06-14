import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const priceItems = [
  { time: '1 hour', price: '150k', drive: '5 day', grading: '8 Color' },
  { time: '2 hours', price: '250k', drive: '10 day', grading: '12 Color' },
  { time: '3 hours', price: '350k', drive: '18 day', grading: '20 Color' }
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
