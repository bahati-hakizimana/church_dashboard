import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/website/adventist.jpeg";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Team",
    link: "/#team",
  },

];
const HelpLinks = [
  {
    title: "Tax & Investment Law",
    link: "/#services",
  },
  {
    title: "Banking & Finance Law",
    link: "/#services",
  },
  {
    title: "Extractive Industry",
    link: "/#services",
  },

];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            {/* <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            
            </h1> */}
            <a
              href="#"
            >
              <img src={Logo} alt="" className=" w-20" />
              <span className="text-2xl sm:text-3xl font-semibold">
                chuch
              </span>
            </a>
            <p className="text-sm mt-2">
              The church in Rwanda embarked on a rebranding in 2000.
              Offices in various fields constructed new buildings.
              The new East Central Rwanda Conference moved into its own office..{" "}
            </p>
            <br />
            {/* Social Handle */}



          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Church Dashboard
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4 mt-6">
            <a href="#">
              <FaInstagram className="text-2xl hover:text-primary duration-300" />
            </a>
            <a href="#">
              <FaFacebook className="text-2xl hover:text-primary duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="text-2xl hover:text-primary duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
