import { Link } from 'react-router-dom';

const rulesItems = [
  {
    title: '1. Booking Minimal h-5',
    details: [
      'DP 45%.',
      'Cancel Wajib H-1, lewat dari itu DP hangus.'
    ]
  },
  {
    title: '2. Posting Foto , Tag IG',
    details: [
      'Cust wajib meng tag akun @sapmutgraphy jika memposting foto di feed ataupun story instagram.',
      'Bersedia foto nya kami post di instagram feed/instastory sebagai testimoni.'
    ]
  },
  {
    title: '3. Moadboard Konsep',
    details: [
      'Cust dapat memberikan refrensi konsep foto yang diinginkan'
    ]
  },
  {
    title: '4. Masa Berlaku Foto',
    details: [
      'Foto akan dikirimkan di drive dan tersedia sampai hari yang ditentukan (diwajibkan cust mendwonload langsung semua hasil foto di drive setelah dikirimkan.'
    ]
  }
];

const Rules = () => (
  <div className="price-page">
    <div className="price-container">
      <Link to="/" className="back-link">← Back</Link>
      
      <div className="price-header-pill" style={{ marginBottom: '30px' }}>
        <h1 className="elegant-text">Rules</h1>
      </div>

      <div className="price-cards-stack">
        {rulesItems.map((item, i) => (
          <div key={i} className="price-card" style={{ alignItems: 'flex-start' }}>
            <div className="card-header-pill" style={{ width: '100%', textAlign: 'left', borderRadius: '40px 40px 40px 5px', fontSize: '20px' }}>
              {item.title}
            </div>
            <div className="card-details" style={{ textAlign: 'left', paddingLeft: '10px' }}>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {item.details.map((detail, dIndex) => (
                  <li key={dIndex} style={{ position: 'relative', paddingLeft: '15px', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Rules;
