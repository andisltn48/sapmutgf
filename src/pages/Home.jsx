import PillButton from '../components/PillButton';

const Home = () => (
  <div className="home-content">
    <div className="button-group">
      <PillButton to="/about">About me</PillButton>
      <PillButton to="/rules">Rules</PillButton>
      <PillButton to="/pricelist">Photoshoot Price</PillButton>
      <PillButton type="button" onClick={() => window.open('https://wa.me/6282255977866', '_blank')}>
        Contact
      </PillButton>
    </div>
  </div>
);

export default Home;
