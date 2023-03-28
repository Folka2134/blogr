import { useState } from "react";
import "./App.css";

import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-hamburger.svg";
import closeIcon from "./assets/icon-close.svg";
import circleImg from "./assets/bg-pattern-circles.svg";
import phoneImg from "./assets/illustration-phones.svg";
import illustrationDesktop from "./assets/illustration-editor-desktop.svg";
import illustrationMobile from "./assets/illustration-editor-mobile.svg";

function App() {
  const [expandedMenu, setExpandedMenu] = useState(false);

  return (
    <div className="App min-w-[350px]">
      <header className="h-[550px] pt-12 px-8 md:px-24 bg-gradient-to-r from-[#FF8F70] to-[#FF3D54] relative rounded-bl-[5rem]">
        <nav className="flex justify-between md:justify-between items-center">
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
          <h1 className="text-3xl md:text-5xl text-white text-center font-semibold mb-5">
            A modern publishing platform
          </h1>
          <h4 className="text-white text-center mb-12">
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
      <main className="flex flex-col">
        <article className="z-10 bg-white h-full">
          <h2 className="text-3xl md:text-4xl text-center text-gray-600 font-semibold mt-24 md:mt-32">
            Desgined for the future
          </h2>
          <section className="relative flex flex-col justify-cente items-center text-center md:text-left md:flex-row md:justify-evenly md:-top-32">
            <div className="px-5 mb-24 md:ml-24 2xl:ml-96 md:mr-24 md:mb-0">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">
                  Introducing an extensible editor
                </h3>
                <p className="text-gray-500">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Robust content management
                </h3>
                <p className="text-gray-500">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you're in full control.
                </p>
              </div>
            </div>
            <img
              className="hidden md:block"
              src={illustrationDesktop}
              alt="Illustration"
            />
            <img
              className="md:hidden order-first my-12"
              src={illustrationMobile}
              alt="Illustration"
            />
          </section>
        </article>
        <article className="bg-[#33334B] relative rounded-tr-[5rem] rounded-bl-[5rem] pt-40 md:pt-0 xl:">
          <img className="h-96 absolute z-0 -top-32" src={circleImg} alt="" />
          <div className="text-center z-10 relative -top-40 md:top-0 md:flex md:justify-center xl:mx-96">
            <img className="relative z-10" src={phoneImg} alt="" />
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-semibold text-white mb-8">
                State of the Art Infrastructure
              </h2>
              <p className="text-lg text-gray-300 px-5">
                With reliability and speed in mind, world data centers provide
                the backbone for ultra-fast connectivity. This ensures your site
                will load instantly, no mater where your readers are, keeping
                your site competitive.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
