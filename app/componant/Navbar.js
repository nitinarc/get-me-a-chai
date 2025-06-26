"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);

//   if (session) {
//     const router = useRouter();
//     router.push("/deshboard");
//   }
  return (
    <nav className="bg-blue-800 text-white flex items-center justify-between h-16 px-4">
      <div className="logo font-bold text-lg flex justify-center items-center">
        <img src="/tea.gif" width={44} alt="tea" />
        <Link href={"/"}>
          <span>Get Me a Chai!</span>
        </Link>
      </div>
      {/* <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div className="relative">
        {session && (
          <>
            <button
            onBlur={() => setTimeout(() => {
                setshowdropdown(!showdropdown)
            }, 300)}
              onClick={() => setshowdropdown(!showdropdown)}
              id="dropdownInformationButton"
              data-dropdown-toggle="dropdownInformation"
              className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.name}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownInformation"
              className={`z-10 ${
                showdropdown ? "" : "hidden"
              } absolute left-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{session.user.name}</div>
                <div className="font-medium truncate">{session.user.email}</div>
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <Link
                    onClick={() => setshowdropdown(!showdropdown)}
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setshowdropdown(!showdropdown)}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <Link
                  onClick={() => signOut()}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </>
        )}
        {session && (
          <button
            onClick={() => signOut()}
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            SignOut
          </button>
        )}
        {!session && (
          <Link href={"/login"}>
            <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
