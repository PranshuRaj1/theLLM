// src/components/Header.js
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    const isLightOrAuto =
      localStorage.getItem("hs_theme") === "light" ||
      (localStorage.getItem("hs_theme") === "auto" &&
        !window.matchMedia("(prefers-color-scheme: dark)").matches);
    const isDarkOrAuto =
      localStorage.getItem("hs_theme") === "dark" ||
      (localStorage.getItem("hs_theme") === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isLightOrAuto && html.classList.contains("dark"))
      html.classList.remove("dark");
    else if (isDarkOrAuto && html.classList.contains("light"))
      html.classList.remove("light");
    else if (isDarkOrAuto && !html.classList.contains("dark"))
      html.classList.add("dark");
    else if (isLightOrAuto && !html.classList.contains("light"))
      html.classList.add("light");
  }, []);

  return (
    <body className="bg-neutral-900">
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav
          className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 px-5 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Preline"
            >
              {/* SVG Logo here */}
              <svg
                className="w-28 h-auto"
                width="116"
                height="32"
                viewBox="0 0 116 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Paths */}
              </svg>
            </a>
            {/* End Logo */}

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Collapse */}
          <div
            id="navbar-collapse"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:px-7">
              <a
                className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
                href="/"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
                href="#"
              >
                Stories
              </a>
              <a
                className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
                href="#"
              >
                Reviews
              </a>
              <a
                className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300"
                href="#"
              >
                Approach
              </a>

              <div className="hs-dropdown relative md:[--strategy:absolute] md:[--trigger:hover] md:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none"
                >
                  About
                  <svg
                    className="flex-shrink-0 ms-1 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-150 hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg p-2">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                    href="#"
                  >
                    About
                  </a>
                  <div className="hs-dropdown relative">
                    <button
                      type="button"
                      className="w-full flex justify-between items-center py-2 px-3 text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                    >
                      Sub Menu
                      <svg
                        className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-150 hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg p-2">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                        href="#"
                      >
                        About
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                        href="#"
                      >
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                        href="#"
                      >
                        Team Account
                      </a>
                    </div>
                  </div>

                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium focus:outline-none"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>

              <div>
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#contact"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </body>
  );
};

export default Header;
