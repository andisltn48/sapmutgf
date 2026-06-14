import PillButton from '../components/PillButton';

const Home = () => (
  <div className="home-content">
    <div className="button-group">
      <PillButton to="/about">About me</PillButton>
      <PillButton to="/pricelist">Photoshoot Price</PillButton>
      <PillButton to="/rules">Rules</PillButton>
      <PillButton type="button" onClick={() => window.location.href = 'mailto:shafamuthiazf@gmail.com'}>
        Contact
      </PillButton>
    </div>
  </div>
);

export default Home;
