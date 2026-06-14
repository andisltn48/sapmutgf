import { Link } from 'react-router-dom';

const PillButton = ({ to, children, onClick, type = 'link' }) => {
  const className = "pill-button";
  
  if (type === 'button') {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default PillButton;
