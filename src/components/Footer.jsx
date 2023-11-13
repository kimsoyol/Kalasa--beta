import logo from "../assets/logo.png";
import fb from '../assets/icons/fb.png';
import insta from '../assets/icons/insta.png';
import location from '../assets/icons/Location.png';


const Footer = () => {
  return (
    <footer className="bg-Black">
      <div>
        <img src={logo} alt="logo" />
        <p>A Space of sharing ART for all generations.</p>
        <div className="flex gap-2">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={location} alt="" />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </footer>
  )
}
export default Footer