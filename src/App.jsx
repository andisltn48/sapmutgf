import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHome, faList, faImages } from '@fortawesome/free-solid-svg-icons'
import './App.css'

const galleries = [
  { id: 1, src: '/gallery/gambaar1.jpg', alt: 'Potret' },
  { id: 2, src: '/gallery/gambaar2.jpg', alt: 'Prewedding' },
  { id: 3, src: '/gallery/gambaar3.jpg', alt: 'Wisuda' },
  { id: 4, src: '/gallery/gambaar4.jpg', alt: 'Event' },
  { id: 5, src: '/gallery/gambaar5.jpg', alt: 'Product' },
  { id: 6, src: '/gallery/gambaar6.jpg', alt: 'Couple' },
]

const packages = [
  {
    name: 'Basic',
    price: '150K',
    features: ['1 jam sesi', '20 foto edited', 'File digital', '1 lokasi'],
  },
  {
    name: 'Standard',
    price: '350K',
    features: ['3 jam sesi', '50 foto edited', 'File digital', '2 lokasi', '1 cetak 8R'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '650K',
    features: ['Full hari', '100+ foto edited', 'File digital', 'Unlimited lokasi', '2 cetak 8R', 'Album foto'],
  },
]

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">sapmutgf</a>
          <ul className="nav-links">
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#pricelist">Pricelist</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </nav>

      <nav className="bottom-nav">
        <a href="#hero">
          <FontAwesomeIcon icon={faHome} />
          <span>Beranda</span>
        </a>
        <a href="#pricelist">
          <FontAwesomeIcon icon={faList} />
          <span>Pricelist</span>
        </a>
        <a href="#gallery">
          <FontAwesomeIcon icon={faImages} />
          <span>Galeri</span>
        </a>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Abadikan <span className="highlight">Momen</span> Berhargamu</h1>
          <p>Jasa fotografi profesional untuk momen spesialmu. Hasil berkualitas, harga bersahabat.</p>
          <a href="#pricelist" className="cta-btn">Lihat Paket</a>
          <div className="social-links">
            <a href="https://instagram.com/sapmutgf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://tiktok.com/@sapmutgf" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
            <a href="https://wa.me/6282255977866" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </section>

      <section id="pricelist" className="pricelist">
        <div className="section-header">
          <h2>Pricelist</h2>
          <div className="divider"></div>
          <p>Pilih paket yang sesuai dengan kebutuhanmu</p>
        </div>
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <span className="badge">Terpopuler</span>}
              <h3>{pkg.name}</h3>
              <div className="price">
                <span className="amount">{pkg.price}</span>
              </div>
              <ul>
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={`https://wa.me/6282255977866?text=Halo%20sapmutgf%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}`} className="order-btn" target="_blank" rel="noopener noreferrer">Pesan Sekarang</a>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>Gallery</h2>
          <div className="divider"></div>
          <p>Hasil karya terbaik kami</p>
        </div>
        <div className="gallery-grid">
          {galleries.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-placeholder">
                <span>{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 sapmutgf. All rights reserved.</p>
      </footer>
    </div>
  )
}
