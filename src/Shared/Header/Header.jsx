import {
  Collapse,
  Typography,
  IconButton,
  Input,
  Button,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";

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

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      toast.success("logout successful");
    });
  };
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
            to={"/availablefood"}
            className="flex items-center hover:text-orange-700 transition-colors"
          >
            Available Foods
          </NavLink>
        </Typography>
        {user ? (
          <>
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
          </>
        ) : (
          ""
        )}
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium"
        >
          {user ? (
            <div className="flex items-center">
              <div className="flex items-center border px-2 py-1 rounded">
                <h3 className="text-lg font-semibold mr-2 ">
                  {user.displayName}
                </h3>
                <Avatar
                  src={`${
                    user.photoURL
                      ? user.photoURL
                      : "https://www.clipartkey.com/mpngs/m/197-1971414_avatars-clipart-generic-user-user-profile-icon.png"
                  }`}
                  alt="avatar"
                />
              </div>
              <Tooltip content="Logout" placement="bottom-start">
                <button className="ml-2" onClick={handleLogout}>
                  <FaSignOutAlt className="h-8 w-8" />
                </button>
              </Tooltip>
            </div>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className="flex items-center hover:text-orange-700 transition-colors"
              >
                <Button size="sm" variant="gradient">
                  Login
                </Button>
              </NavLink>
            </>
          )}
        </Typography>
      </ul>
    );
  };

  return (
    <nav className=" backdrop-blur-lg bg-white/10  py-3">
      <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 flex items-center "
        >
          <Link to={"/"}>
            <img src={logo} className="w-28" alt="" />
          </Link>
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
