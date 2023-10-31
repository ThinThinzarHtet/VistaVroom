import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
const navItems = ["Home", "Booking", "About", "Services", "Contact"];

const logoArr = [
  <BiLogoFacebook fontSize={24} />,
  <BiLogoLinkedin fontSize={24} />,
  <BiLogoInstagram fontSize={24} />,
  <BiLogoTwitter fontSize={24} />,
  <BiLogoYoutube fontSize={24} />,
];
const Footer = () => {
  return (
    <>
      <div className="py-36">
        <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between gap-24">
          <div>
            <p className="text-center lg:text-start">
              <span className="text-primary-green logo_text uppercase">
                Vista
              </span>
              <span className="text-primary-black logo_text uppercase">
                Vroom
              </span>
            </p>
            <p className="text-light-gray my-7 text-center lg:text-start">
              Connect with us on social media platforms. Follow us on Facebook,
              Twitter, and Instagram for exclusive deals, updates, and travel
              inspiration.
            </p>
            <div className="flex items-center gap-[18px] justify-center lg:justify-start">
              {logoArr.map((logo, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-primary-black hover:text-primary-green transition-all duration-300 ease-out"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
          <ul className="flex flex-col sm:flex-row items-center gap-10 mx-auto lg:mx-0">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "border-primary-green" : "border-transparent"
                } link`}
              >
                {navItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-center">
          &copy;VistaVroom 2023. All Rights Reserved. Developed by{" "}
          <span className="green_text">Thin Thinzar Htet</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
