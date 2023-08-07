import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/Auth.context";
import { twMerge } from "tailwind-merge";
import {BiLogOut} from 'react-icons/bi';

function Navbar() {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();

  return (
    <nav className="bg-zinc-900 ">
      <Container className={"flex justify-between px-20 py-3"}>
        <Link to="/">
          <h1 className="font-bold text-2xl">PERM Tasks</h1>
        </Link>
        <ul className="flex  items-center justify-center md:gap-x-1">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={twMerge(
                      "text-slate-300 flex items-center px-3 py-1",
                      location.pathname === path && "bg-sky-500 "
                    )}
                  >
                    {icon}
                    <span className=" hidden md:block">{name}</span>
                  </Link>
                </li>
              ))}
              <li
                className={
                  "text-slate-300 flex items-center px-3 py-1 hover:cursor-pointer"
                }
                onClick={() => {
                  signout();
                }}
              >
               <BiLogOut className="h-5 w-5"/> <span className="hidden sd:block">Logout</span>
              </li>
              <li className="flex gap-x-2 items-center justify-center">
                <img
                  src={user.gravatar}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={twMerge(
                  "text-slate-300 flex items-center px-3 py-1",
                  location.pathname === path && "bg-sky-500 "
                )}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
