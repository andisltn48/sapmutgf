import { Link } from 'react-router-dom';

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

export default About;
