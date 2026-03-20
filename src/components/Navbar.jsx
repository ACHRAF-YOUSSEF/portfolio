
import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("About");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full sticky top-0 z-30 backdrop-blur-md bg-slate-950/55 border-b border-[#4aaedb3f]"
    >
      <div className="sm:px-16 px-5 py-3.5 sm:py-4 w-full flex justify-between items-center max-w-7xl mx-auto gap-3">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("About");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 rounded-full border border-[#5bc0eb6b] bg-[#0d2033] grid place-items-center mono text-[#7fd0f4] text-sm">
            $&gt;
          </div>
          <p className="text-slate-100 text-[15px] xs:text-[16px] sm:text-[18px] font-bold cursor-pointer truncate max-w-[150px] xs:max-w-none">
            Achraf Youssef
          </p>
          <span className="hidden md:inline terminal-chip">arch-dev</span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-3">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-slate-100 border-[#71c8f04f] bg-[#18324a75]"
                  : "text-slate-400 border-transparent"
              } border rounded-full hover:text-slate-100 hover:border-[#71c8f04f] transition text-[15px] font-medium`}
            >
              <a
                href={`#${link.id}`}
                className="block px-4 py-2"
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className="p-1.5 rounded-md border border-[#4aaedb3f] bg-[#0d203380]"
            aria-label="Toggle menu"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            />
          </button>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-5 absolute rounded-xl z-10 min-w-[170px] my-2 mx-4 top-16 right-0 shell-card`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-slate-100" : "text-slate-400"
                  } font-medium text-[16px]`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
