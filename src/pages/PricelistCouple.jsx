import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const priceItems = [
  { time: '1.5 hour', price: '450k', drive: '7 day', grading: '15 Color' },
  { time: '2.5 hour', price: '750k', drive: '14 day', grading: '25 Color' }
];

const PricelistCouple = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Couple / Bestie</h1>
      </div>
      
      <div className="price-subtitle-pill">
        <span>Engagement . Prewedding . Bestie</span>
      </div>

      <div className="price-cards-stack">
        {priceItems.map((item, i) => (
          <PriceCard key={i} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default PricelistCouple;
