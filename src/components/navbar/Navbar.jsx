import React, { useState } from "react";
import logo from "../../assets/2.png";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css"; // <== Make sure to import the custom CSS here

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navlist = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
    { name: "Comparison", path: "/comparison" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const buttons = [
    { icon: <FaRegHeart />, label: "Wishlist" },
    { icon: <FaRegUser />, label: "Profile" },
    { icon: <FaCartShopping />, label: "Cart" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", searchValue);
    // handle search logic here
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="bikelove logo" className="w-36" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          {navlist.map((item) => (
            <li key={item.name}>
              <a href={item.path} className="hover:text-orange-400">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block">
          <form className="form" onSubmit={handleSearch}>
            <button type="submit">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="input"
              placeholder="Search..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
            />
            <button
              className="reset"
              type="reset"
              onClick={() => setSearchValue("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="hidden  md:flex gap-3">
          {buttons.map((button, i) => (
            <button
              key={i}
              title={button.label}
              className="p-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              {button.icon}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-4 space-y-4 animate-slide-in">
          {navlist.map((item) => (
            <a
              href={item.path}
              key={item.name}
              className="block text-white hover:text-orange-400"
            >
              {item.name}
            </a>
          ))}

          <form className="form" onSubmit={handleSearch}>
            <button type="submit">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="input"
              placeholder="Search..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
            />
            <button
              className="reset"
              type="reset"
              onClick={() => setSearchValue("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>

          <div className="flex gap-3 pt-2">
            {buttons.map((button, i) => (
              <button
                key={i}
                title={button.label}
                className="p-2 bg-blue-500 rounded hover:bg-blue-600"
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
