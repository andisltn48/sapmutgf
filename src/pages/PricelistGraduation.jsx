import { Link } from 'react-router-dom';

const priceItems = [
  { time: '2 hours', price: '250k', drive: '10 day', grading: '15 Color', note1: '+15 Menit Fee 30k', note2: '+1 Person Fee 35k' },
  { time: '3 hours', price: '350k', drive: '18 day', grading: '25 Color', note1: '+15 Menit Fee 30k', note2: '+1 Person Fee 35k, Free Video 20 sec'  }
];

const PriceCard = ({ item }) => (
  <div className="price-card">
    <div className="card-header-pill">
      {item.time} : {item.price}
    </div>
    <div className="card-details">
      <p>Drive {item.drive}</p>
      <p>Free {item.grading} Graiding request</p>
      <p>{item.note1}</p>
      <p>{item.note2}</p>
    </div>
  </div>
);

const PricelistGraduation = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/pricelist" className="back-link">← Back to Pricelist</Link>
      
      <div className="price-header-pill">
        <h1 className="elegant-text">Graduation Photoshoot</h1>
      </div>
      
      <div className="price-subtitle-pill">
        <span>Personal, Free 1 Person</span>
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
