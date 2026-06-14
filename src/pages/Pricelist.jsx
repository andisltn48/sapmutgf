import { Link } from 'react-router-dom';

const priceItems = [
  { time: '1 hour', price: '135k', drive: '5 day', grading: '5 Color' },
  { time: '2 hour', price: '245k', drive: '10 day', grading: '10 Color' },
  { time: '3 hour', price: '350k', drive: '18 day', grading: '20 Color' }
];

const PriceCard = ({ item }) => (
  <div className="price-card">
    <div className="card-header-pill">
      {item.time} : {item.price}
    </div>
    <div className="card-details">
      <p>Drive {item.drive}</p>
      <p>Free {item.grading} Graiding request</p>
      <p>+ 15 Menit Fee 25k</p>
    </div>
  </div>
);

const Pricelist = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/" className="back-link">← Back</Link>
      
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

export default Pricelist;
