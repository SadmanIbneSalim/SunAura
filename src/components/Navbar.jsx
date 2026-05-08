"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

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
      <li>
        <Link
          href="/Profile"
          className={
            pathname === "/Profile" ? "bg-orange-500 text-white rounded" : ""
          }
        >
          Profile
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
              <Link href={"/Profile"}>
                {user.image ? (
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                      <Image
                        src={user.image}
                        alt={user.name}
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="w-7 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 bg-orange-500 text-white">
                      <span className="text-xs font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
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
