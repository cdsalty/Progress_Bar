import ajcLogo from '../assets/images/ajcLogo.svg';
import ajcMobile from '../assets/images/ajcMobile.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';
import { IoPersonCircleOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    // <header className="md:py-[22px] md:px-[30px] w-full">
    <header className="w-full px-5 py-4">
      <nav className="flex-col">
        <div className="flex justify-between menu-logo-subscribe-row w-full">
          <div>
            <img src={hamburger} alt="Hamburger Menu" width={25} height={25} />
          </div>
          <div>
            <div className="hidden md:block">
              <a href="/">
                <img src={ajcLogo} alt="AJC Logo" />
              </a>
            </div>
            <div className="sm:block md:hidden">
              <img src={ajcMobile} alt="AJC Logo" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-blue-600 rounded-full text-white text-[7px] px-4 py-1">
              Subscribe
            </button>

            <button className="button2 flex items-center gap-1">
              <IoPersonCircleOutline className="text-xl" />
              <span className="hidden sm:block sm:text-xs lg:text-base">
                Login
              </span>
            </button>
          </div>
        </div>
        <span className="flex justify-center font-bold">Sports</span>

        <div className="flex justify-center border-t border-b">
          <ul className="flex justify-center items-center text-[10px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="/"
                  className="text-[10px] md:text-[11.2px] lg:text-[12.8px] px-[15px] hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
