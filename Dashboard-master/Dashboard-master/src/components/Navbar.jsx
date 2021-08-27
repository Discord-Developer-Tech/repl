import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [session, loading] = useSession();

  return (
    !loading && (
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-3">
          <img src="/logo.png" className="w-12 h-12 rounded-full" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-gray-400"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-md lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="/support"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Support
            </a>
            <a
              href="/premium"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Premium
            </a>
          </div>
          <div>
            {!session && (
              <>
                <a
                  onClick={() => signIn("discord")}
                  className="inline-block text-sm px-4 py-3 font-semibold leading-none bg-oatmeal-200 rounded text-white mt-4 lg:mt-0"
                >
                  Login
                </a>
              </>
            )}
            {session && (
              <>
                <a
                  onClick={() => (window.location.href = `/dashboard`)}
                  className="inline-block text-sm px-4 py-3 mr-2 font-semibold leading-none bg-oatmeal-200 rounded text-white mt-4 lg:mt-0"
                >
                  Dashboard
                </a>
                <a
                  onClick={() =>
                    signOut()
                  }
                  className="inline-block text-sm px-4 py-3 mr-2 font-semibold leading-none bg-oatmeal-200 rounded text-white mt-4 lg:mt-0"
                >
                  Logout, {session.user.name}
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    )
  );
};

export default Navbar;
