import "./App.css";

function App() {
  return (
    <div className="App p-6">
      <header className="pt-6 px-24">
        <nav className="flex">
          <div className="pr-10">logo</div>
          <div className="flex justify-between w-full">
            <div className="dropdown relative">
              <button className="group mx-2">
                <div className="">Product</div>
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
                <div className="">Company</div>
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
                <div className="">Product</div>
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
              <button>login</button>
              <button>Sign Up</button>
            </div>
          </div>
        </nav>
        <div>banner</div>
      </header>
    </div>
  );
}

export default App;
