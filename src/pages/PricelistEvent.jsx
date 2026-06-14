import { Link } from 'react-router-dom';

const priceItems = [
  { time: '3 Hours', price: '350k', drive: '18 day', note: 'Free Video 20 sec' },
];

const PriceCard = ({ item }) => (
  <div className="price-card">
    <div className="card-header-pill">
      {item.time} : {item.price}
    </div>
    <div className="card-details">
      <p>Drive {item.drive}</p>
      <p>{item.note}</p>
    </div>
  </div>
);

const PricelistEvent = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Event Photoshoot</h1>
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
