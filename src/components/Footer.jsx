import logo from "../assets/logo.png";
import fb from "../assets/icons/fb.png";
import insta from "../assets/icons/insta.png";
import location from "../assets/icons/Location.png";

const Footer = () => {
  return (
    <footer className="bg-Black text-Merio p-20">
      <div className="flex justify-between gap-6">
        <div className="basis-1/4">
          <img src={logo} alt="logo" className="pb-4" />
          <p className="pb-4">A Space of sharing ART for all generations.</p>
          <div className="flex gap-8">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={location} alt="" />
          </div>
        </div>
        <div className="basis-1/4 quicklinks">
          <p className="pb-4">QUICK LINKS</p>
          <a href="">Home</a>
          <a href="">Gallery</a>
          <a href="">Exhibitions</a>
          <a href="">Collections</a>
          <a href="">Artists</a>
          <a href="">Blogs</a>
        </div>
        <div className="basis-1/4">
          <p className="pb-4">GET IN TOUCH</p>
          <p className="text-Gray pb-2">Contact Us:</p>
          <p>+95 976 345 678</p>
          <p>admin.kalasa@gmail.com</p>
        </div>
        <div className="basis-1/4">
          <p className="pb-4">LOCATION</p>
          <p className="text-Gray pb-2">Our Address:</p>
          <p>
            No. 91-93, 1st floor(left), Seikkantha Street (Middle Block),
            Kyauktada Township, Yangon.
          </p>
        </div>
      </div>
      <div className="inline-flex items-center w-full justify-between pt-20">
        <div className="border-solid border-[1px] border-Eggshell basis-1/3"></div>
        <p className="basis-1/3 text-center">
          © 2019-2023. All Right Reserved by Kalasa Art Space.
        </p>
        <div className="border-solid border-[1px] border-Eggshell basis-1/3"></div>
      </div>
    </footer>
  );
};
export default Footer;
