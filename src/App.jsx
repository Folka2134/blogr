import { useState } from "react";
import "./App.css";

import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-hamburger.svg";
import closeIcon from "./assets/icon-close.svg";

function App() {
  const [expandedMenu, setExpandedMenu] = useState(false);

  return (
    <div className="App">
      <header className="h-[550px] pt-6 px-24 bg-gradient-to-r from-[#FF8F70] to-[#FF3D54] relative rounded-bl-[5rem]">
        <nav className="flex justify-between items-center">
          <img className="pr-10" src={logo} alt="logo" />
          {expandedMenu ? (
            <img
              className="h-5 righ block md:hidden right-0"
              src={closeIcon}
              alt=""
              onClick={() => setExpandedMenu(!expandedMenu)}
            />
          ) : (
            <img
              className="h-5 righ block md:hidden right-0"
              src={menuIcon}
              alt=""
              onClick={() => setExpandedMenu(!expandedMenu)}
            />
          )}
          <div className="hidden justify-between w-full items-center md:flex">
            <div className="dropdown relative">
              <button className="group mx-2">
                <div className="text-white">Product</div>
                <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Overview
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Pricing
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Marketplace
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Features
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Integrations
                  </div>
                </div>
              </button>
              <button className="group mx-2">
                <div className="text-white">Company</div>
                <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    About
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Team
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Blog
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Careers
                  </div>
                </div>
              </button>
              <button className="group mx-2">
                <div className="text-white">Connect</div>
                <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Contact
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    Newsletter
                  </div>
                  <div className="py-2 text-gray-600 hover:text-black font-semibold">
                    LinkedIn
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button className="text-white mx-6 ">login</button>
              <button className="bg-white hover:bg-[#FF7A85] p-3 px-8 text-[#FF525D] hover:text-white font-semibold rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        {expandedMenu && (
          <div className="bg-white w-72 absolute rounded-lg md:hidden">
            <div className="justify-between w-full items-center flex flex-col">
              <div className="flex flex-col h-full justify-evenly dropdown relative">
                <button className="group mx-2">
                  <div className="text-black">Product</div>
                  <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Overview
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Pricing
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Marketplace
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Features
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Integrations
                    </div>
                  </div>
                </button>
                <button className="group mx-2">
                  <div className="text-black">Company</div>
                  <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      About
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Team
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Blog
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Careers
                    </div>
                  </div>
                </button>
                <button className="group mx-2">
                  <div className="text-black">Connect</div>
                  <div className="dropdown-menu absolute bg-white shadow-lg rounded-lg p-5 opacity-0 group-focus:opacity-100 transition-opacity duration-150 pointer-events-none group-focus:pointer-events-auto transform">
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Contact
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      Newsletter
                    </div>
                    <div className="py-2 text-gray-600 hover:text-black font-semibold">
                      LinkedIn
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex flex-col border-t-2">
                <button className="text-black mx-6 ">login</button>
                <button className="bg-white hover:bg-[#FF7A85] p-3 px-8 text-[#FF525D] hover:text-white font-semibold rounded-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-semibold mb-8">
            A modern publishing platform
          </h1>
          <h4 className="text-white mb-12">
            Grow your audience and build your online brand
          </h4>
          <div className="w-[300px] flex justify-evenly">
            <button className="bg-white hover:bg-[#FF7A85] p-3 px-5 text-[#FF525D] hover:text-white font-semibold rounded-full">
              Start for Free
            </button>
            <button className="border-2 border-white hover:bg-white p-3 px-5 text-white hover:text-[#FF525D] font-semibold rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </header>
      <main>
        <article></article>
      </main>
    </div>
  );
}

export default App;
