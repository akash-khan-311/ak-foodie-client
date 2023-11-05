import {
  Collapse,
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/available"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          Available Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/addfood"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          Add Food
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/managefood"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          Manage My Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/foodrequest"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          My Food Request
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/login"}
          className="flex items-center hover:text-orange-700 transition-colors"
        >
          <Button size="sm" variant="gradient">
            Login
          </Button>
        </NavLink>
      </Typography>
    </ul>
  );
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <nav className=" backdrop-blur-lg bg-white/5  py-3">
      <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 flex items-center "
        >
          <img src={logo} className="w-28" alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse className="px-5 backdrop-blur-xl bg-white/5" open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
};

export default Header;
