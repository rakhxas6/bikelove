import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Top New Vehicles", path: "/top-new-vehicles" },
    { name: "Trending Vehicles", path: "/trending-vehicles" },
    { name: "Blog", path: "/blog" },
    { name: "Offer", path: "/offer" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="hover:text-blue-500" />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="hover:text-blue-400" />,
      url: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="hover:text-pink-500" />,
      url: "https://instagram.com",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-300 max-w-md">
            We are passionate about bikes and the biking community. Join us in
            our journey to promote cycling.
          </p>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-1">Email: info@bikelove.com</p>
          <p className="text-sm text-gray-300 mb-1">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-300 mb-1">
            Follow us on social media for the latest updates!
          </p>

          <div className="flex space-x-4 mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm text-gray-300 hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} BikeLove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
