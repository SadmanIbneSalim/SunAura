"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();


    const { 
        data: session, 
        
    } = authClient.useSession() ;
    const user=session?.user

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "bg-orange-500 text-white rounded" : ""}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/Products"
          className={
            pathname === "/Products" ? "bg-orange-500 text-white rounded" : ""
          }
        >
          Products
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 sticky top-0 z-10 shadow-sm">
      <div className="navbar max-w-285 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className=" font-bold btn-ghost text-2xl">
            Cutu<span className="text-orange-600">Aura</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
         <div className="navbar-end gap-3">
          {user ? (
            
            <>
              <Link href={"/profile"}>
                <FaUserLarge className="text-orange-500 text-xl cursor-pointer" />
              </Link>
              <button
                onClick={() => authClient.signOut()}
                className="btn btn-sm bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold"
              >
                Sign Out
              </button>
            </>
          ) : (
            
            <Link
              href={"/authentication/login"}
              className="btn btn-sm bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      </div>
    
  );
};

export default Navbar;
