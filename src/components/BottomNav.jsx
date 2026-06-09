import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faImages } from '@fortawesome/free-solid-svg-icons'

export default function BottomNav() {
  return (
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
  )
}
