import footerLogo from "../../assets/logo.png";
import banner from "../../assets/website/footer-pattern.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const footerLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#services",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
  {
    id: 4,
    name: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-bottom size-full text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto duration-400 pb-10" data-aos="zoom-in">
        <div className="grid md:grid-cols-3 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-12" />
              Shopsy
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              autem natus quibusdam consequatur vel voluptatibus obcaecati illum
              labore aperiam doloribus.
            </p>
          </div>

          {/* footer links */}
          <div className="grid grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {footerLinks.length > 0 &&
                    footerLinks.map((item) => (
                      <li
                        key={item.id}
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/*links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul>
                  {footerLinks.length > 0 &&
                    footerLinks.map((item) => (
                      <li
                        key={item.id}
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      >
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div className="mt-3">
              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+12 3456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
