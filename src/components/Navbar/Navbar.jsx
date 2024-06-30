import React,{useRef,useEffect, useState} from 'react'
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/adventist.jpeg";
import DarkMode from "./DarkMode";
import { Link } from 'react-router-dom';

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  // {
  //   id: 3,
  //   name: "Posts",
  //   link: "/#post",
  // },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
];
const Navbar = ({ handleLoginPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const headerRef = useRef(null)
    const menuRef = useRef(null)
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(() =>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[]);

    const handleClick = e =>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute("href")
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };
  return (
    <div
    ref={headerRef}
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300 shadow-lg
    "
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            href="#"
          >
            <img src={Logo} alt="" className=" w-20" />
            <span className="text-2xl sm:text-3xl font-semibold">
              Church
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4 text-xl">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <Link
                    to="/login"
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none"
                  >
                    <button className="primary-btn">Login</button>
                  </Link>
              
              <DarkMode />
            </ul>

            <div className="block sm:hidden">
              <ul className="flex text-xl font-semibold  justify-center items-center gap-4">
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
