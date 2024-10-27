import logo from "../assets/logo.png";
import { navLinks } from "../constants/";

console.log(navLinks);

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center">
      {/* logo */}
      <div className=" py-5 ">
        <img src={logo} alt="" className="w-40" />
      </div>
      {/* nav-links */}

      <ul className="hidden md:flex justify-center gap-5">
        {navLinks.map((nav, index) => {
          return (
            <li>
              <a href="">{nav}</a>
            </li>
          );
        })}
      </ul>

      {/* button */}

      <div className="border border-gray-400 w-fit py-2 px-4 rounded-lg hover:bg-primary transform duration-300 hover:text-white">
        <button>Get in touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
