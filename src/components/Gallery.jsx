const galleries = [
  { id: 1, src: '/gallery/gambaar1.jpg', alt: 'Potret' },
  { id: 2, src: '/gallery/gambaar2.jpg', alt: 'Prewedding' },
  { id: 3, src: '/gallery/gambaar3.jpg', alt: 'Wisuda' },
  { id: 4, src: '/gallery/gambaar4.jpg', alt: 'Event' },
  { id: 5, src: '/gallery/gambaar5.jpg', alt: 'Product' },
  { id: 6, src: '/gallery/gambaar6.jpg', alt: 'Couple' },
]

export default function Gallery() {
  return (
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
  )
}
