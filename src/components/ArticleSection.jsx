import React from "react";
import demoImg from "../assets/tommy-mason-x9lQOXVIxMc-unsplash.jpg";
import { FaCalendar } from "react-icons/fa6";

const articles = [
  {
    id: 1,
    title: "Bajaj to launch a more affordable Chetak",
    img: demoImg,
    date: "2082/04/15",
  },
  {
    id: 2,
    title: "Matter Aera 5000",
    img: demoImg,
    date: "2082/04/11",
  },
  {
    id: 3,
    title: "Ather Rizta Debuting At NAIMA 2025",
    img: demoImg,
    date: "2082/03/20",
  },
];

export const ArticleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <p className="text-lg font-medium text-gray-700">
          Grab World’s Trend With
        </p>
        <h2 className="text-3xl font-semibold text-gray-900">
          Our Latest <span className="text-orange-500">Articles & Tips</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-5">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2 text-gray-800">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 border-t pt-2 flex items-center gap-2">
                <FaCalendar />
                {article.date}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white px-6 py-2 rounded-md shadow-md">
          Our Blogs
        </button>
      </div>
    </section>
  );
};
