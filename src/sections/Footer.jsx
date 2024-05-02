import logo from "../assets/headerIcons/headerLogo.png";
import { footerAbout, footerResources, footerSupport } from "../constants/data";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="flex justify-between border-y-2 border-gray/25 py-10 pr-5 md:p-16 lg:p-16">
        <div>
          <img
            src={logo}
            alt="Datawise Logo"
            className="hidden md:block lg:block"
          />
        </div>
        <div>
          <h6 className="mb-3 font-semibold">About</h6>
          {footerAbout.map((link) => (
            <ul key={link.id}>
              <li className="info mb-2 text-sm ">
                <a href="#">{link.title}</a>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <h6 className="mb-3 font-semibold">Resources</h6>
          {footerResources.map((link) => (
            <ul key={link.id}>
              <li className="info mb-2 text-sm ">
                <a href="#">{link.title}</a>
              </li>
            </ul>
          ))}
        </div>
        <div className="hidden md:block lg:block">
          <h6 className="mb-3 font-semibold">Support & Contact</h6>
          {footerSupport.map((link) => (
            <ul key={link.id}>
              <li className="info mb-2 text-sm ">
                <a href="#">{link.title}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="info my-5 flex justify-between text-sm">
        <div>{new Date().getFullYear()}</div>
        <a href="#header" className="underline">
          Back to top
        </a>
        <div className="hidden sm:block md:block">
          <ul className="flex gap-3">
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Primary Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
