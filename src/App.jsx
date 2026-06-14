import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Pricelist from './pages/Pricelist';
import PricelistPersonal from './pages/PricelistPersonal';
import PricelistCouple from './pages/PricelistCouple';
import PricelistGraduation from './pages/PricelistGraduation';
import PricelistEvent from './pages/PricelistEvent';
import './App.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/pricelist/personal" element={<PricelistPersonal />} />
          <Route path="/pricelist/couple" element={<PricelistCouple />} />
          <Route path="/pricelist/graduation" element={<PricelistGraduation />} />
          <Route path="/pricelist/event" element={<PricelistEvent />} />
        </Routes>
      </Layout>
    </Router>
  );
}
