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

export default function Pricelist() {
  return (
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
  )
}
