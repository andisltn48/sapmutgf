import { useLocation } from 'react-router-dom';
import bgHome from '../assets/bghome.jpg';
import bgPrice from '../assets/pricebg.jpg';

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

export default Layout;
