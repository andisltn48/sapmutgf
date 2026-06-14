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

export default PriceCard;