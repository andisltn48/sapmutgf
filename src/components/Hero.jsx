import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Abadikan <span className="highlight">Momen</span> Berhargamu</h1>
        <p>Jasa fotografi profesional untuk momen spesialmu. Hasil berkualitas, harga bersahabat.</p>
        <a href="#pricelist" className="cta-btn">Lihat Paket</a>
        <div className="social-links">
          <a href="https://www.instagram.com/sapmutgraphy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.tiktok.com/@kjngwo" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
          <a href="https://wa.me/6282255977866" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>
      </div>
    </section>
  )
}
