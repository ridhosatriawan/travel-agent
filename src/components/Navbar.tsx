import Button from "./Button";
import ChevronDownIcon from "../assets/icons/ChevronDown";
import Logo from "../assets/icons/logo";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center">
      <div className="max-w-[1200px] h-[72px] w-full flex items-center justify-between gap-8">
        <div className="w-[369px]">
          <Logo />
        </div>

        <ul className="flex items-center justify-center gap-6">
          <li>
            <a href="#" className="text-brand-blue">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="flex">
            <a href="#">Packages</a>
            <ChevronDownIcon />
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Comunity</a>
          </li>
        </ul>

        <div className="flex gap-3 w-[369px] justify-end">
          <Button variant="white">Login</Button>
          <Button variant="black">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
