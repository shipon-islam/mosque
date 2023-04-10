import { useAuth } from "@/firebase/AuthContext";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const { currentUser, logout } = useAuth();
  const [profileToggle, setProfileToggle] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "about",
      path: "/about",
    },
    {
      id: 3,
      name: "prayer time",
      path: "/prayertime",
    },
    {
      id: 4,
      name: "recent news",
      path: "/news",
    },
    {
      id: 5,
      name: "announcement",
      path: "/announcement",
    },
  ];
  function handleWindowClick(event) {
    if (event.target.closest(".navbar") === null) {
      setToggle(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <header
        className={`${poppins.className} w-full z-50 max-w-[1450px] mx-auto pl-6 pr-7 py-2 md:px-16 sticky  left-0 top-0 bg-white border-b border-green-800/20`}
      >
        <nav
          className="flex relative 
       justify-between items-center navbar"
        >
          <div>
            <a href="/">
              <img
                className="w-[70px] md:w-[80px]"
                src="/images/logo.png"
                alt="navLogo"
              />
            </a>
          </div>
          <div
            className={`absolute lg:static w-3/4 ${
              toggle ? "scale-[0] lg:scale-[1]" : "scale-1"
            } lg:w-fit min-h-[89vh] lg:min-h-fit top-[78px]  pt-7 lg:pt-0 pr-3 transition-all duration-500 -left-9 md:-left-16 origin-top-left bg-white `}
          >
            {links.map((link) => (
              <a
                key={link.id}
                className={`${poppins.className} block text-green-900 lg:inline uppercase  font-medium py-2 lg:py-0 ml-12 text-[0.9rem] border-b border-slate-600 lg:border-white lg:border-b md:text-md hover:text-green-600 hover:border-b-2 hover:border-green-500 transition-colors duration-400 my-${link.my}`}
                href={link.path}
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center ">
            <button className="bg-green-600 py-[0.5rem] px-4 text-white uppercase font-medium rounded-2xl hover:bg-lime-600  hidden md:block mr-12 lg:mr-0">
              <Link href="/donate">Donate</Link>
            </button>
            <button
              className="block lg:hidden bg-green-600 shadow-md shadow-green-700 px-1 rounded-md"
              onClick={() => setToggle((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 transition-all duration-500 text-slate-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    toggle
                      ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
