import { useLocation } from 'react-router-dom';
import bgHome from '../assets/bghome.jpg';
import bgPersonal from '../assets/personalbg.jpg';
import bgCouple from '../assets/couplebg.jpg';
import bgGraduation from '../assets/graduationbg.jpg';
import bgEvent from '../assets/eventbg.jpg';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const getBackground = () => {
    switch (location.pathname) {
      case '/pricelist/personal':
        return bgPersonal;
      case '/pricelist/couple':
        return bgCouple;
      case '/pricelist/graduation':
        return bgGraduation;
      case '/pricelist/event':
        return bgEvent;
      default:
        return bgHome;
    }
  };
  
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${getBackground()})` }}>
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
