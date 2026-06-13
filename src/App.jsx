import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import bgHome from './assets/bghome.jpg'; // Using jj1 as home bg for now or similar
import bgPrice from './assets/pricebg.jpg';

const Home = () => (
  <div className="home-content">
    <div className="button-group">
      <Link to="/about" className="pill-button">About me</Link>
      <Link to="/pricelist" className="pill-button">Photoshoot Price</Link>
      <button className="pill-button">Contact</button>
    </div>
  </div>
);

const About = () => (
  <div className="about-page">
    <div className="about-container">
      <Link to="/" className="back-link">← Back</Link>
      <h1 className="about-title">Hello !</h1>
      <div className="about-content">
        <p>I’m Shafa Muthia, a Visual Communication Design (DKV) student based in Balikpapan and the founder of Sapmutgraphy.</p>
        <p>The name Sapmutgraphy is derived from my name, Shafa Muthia (Sapmut), combined with the word graphy, which means the process of recording, capturing, or expressing through visual media. It reflects my passion for visual storytelling and my belief that photography can be a powerful medium for conveying emotions, perspectives, and meaningful narratives.</p>
        <p>My interest in photography began during high school and has continued to grow throughout my academic journey. Beyond developing technical skills, I enjoy exploring new concepts, creative ideas, and different approaches in every photoshoot. For me, photography is more than simply capturing moments it is a form of visual expression that can represent personality, identity, and the stories behind each frame.</p>
        <p>Through Sapmutgraphy, I offer photography services for a variety of needs, including graduation sessions, personal portraits, events, and other forms of documentation. By combining creativity with attention to detail, I strive to create images that not only stand out visually but also communicate a deeper story and leave a lasting impression.</p>
      </div>
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
        {[
          { time: '1 hour', price: '135k', drive: '5 day', grading: '5 Color' },
          { time: '2 hour', price: '245k', drive: '10 day', grading: '10 Color' },
          { time: '3 hour', price: '350k', drive: '18 day', grading: '20 Color' }
        ].map((item, i) => (
          <div key={i} className="price-card">
            <div className="card-header-pill">
              {item.time} : {item.price}
            </div>
            <div className="card-details">
              <p>Drive {item.drive}</p>
              <p>Free {item.grading} Graiding request</p>
              <p>+ 15 Menit Fee 25k</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Layout = ({ children }) => {
  const location = useLocation();
  const bg = location.pathname === '/pricelist' ? bgPrice : bgHome;
  
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content-wrapper">
        {children}
        <div className="footer-labels">
          <div className="pill-label">@sapmutgraphy</div>
          <div className="pill-label">shafamuthiazf@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricelist" element={<Pricelist />} />
        </Routes>
      </Layout>
    </Router>
  );
}
