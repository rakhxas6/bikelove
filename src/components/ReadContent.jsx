import React from "react";
import { IoAdd } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi2";

const ReadContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full">
      <div className="w-[94vw] mx-auto mb-4 border transition-colors duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 w-full p-6 bg-slate-100"
        >
          {isOpen ? <HiOutlineMinus /> : <IoAdd />} Read Content
        </button>

        {isOpen && (
          <section className="px-6 pb-6 text-gray-800 leading-relaxed">
            <p className="mb-4">
              Welcome to BikeLove, Your ultimate hub for all things related to
              motorcycles and scooters! Our website serves as a valuable
              resource for staying updated on the most recent trends in the
              world of two-wheelers within the Nepali market and the world.
              Whether you're a seasoned rider or a newcomer in search of your
              first bike, we've got your needs covered.
            </p>

            <p className="mb-4">
              Here, you can delve into the intricate details, pricing
              information, and various features of a diverse selection of
              motorcycles and scooters. But that's not all—our distinctive tool
              for making comparisons between different models enables you to
              easily make the optimal choice that aligns with your individual
              requirements and preferences.
            </p>

            <p className="mb-6">
              At BikePriceNepal, we're enthusiastic about ensuring you stay
              well-informed regarding the latest trends and advancements within
              the motorcycle industry, enabling you to make well-considered
              decisions and remain at the forefront of developments. Come and
              embark on this exhilarating journey into the realm of two-wheelers
              with us!
            </p>

            <h1 className="text-3xl font-semibold text-blue-600 mb-4">
              TVS Bikes Price in Nepal (2025)
            </h1>

            <p className="mb-4">
              TVS was formed in 1979 and is India's third-largest two-wheeler
              manufacturer. It now makes a wide range of bikes and has become
              one of the most trusted brands due to the high quality of its
              products. The same may be said about Nepal. Since its introduction
              in September 2015, the brand has risen to fifth place in the
              2-wheeler market.
            </p>

            <p className="mb-4">
              The company is known for its extensive product portfolio, which
              includes a range of motorcycles, scooters, and three-wheelers.
              Popular models include: Apache RR310, Apache RTR 160 4V, TVS
              Ronin, Apache RTR 200 4V Raider, and Radeon. Scooters include
              Jupiter, Zest, NTorq, and Wego.
            </p>

            <p className="mb-4">
              One of the key strengths of TVS Motor Company is its focus on
              innovation and technology, including ABS, fuel injection, LED
              lighting, and digital instrument consoles. It has global reach in
              60+ countries and a joint venture with BMW Motorrad for premium
              motorcycle production.
            </p>

            <p className="mb-4">
              Jagdamba Motors is the authorized distributor of TVS in Nepal.
              They currently offer 9 motorcycles in various variants. Due to
              recent budget changes, prices have been updated for 2023 and 2024.
            </p>

            <p className="mb-6">
              The TVS bike price in Nepal starts at{" "}
              <strong>Rs. 1,98,900</strong> (Radeon) and goes up to{" "}
              <strong>Rs. 7,99,900</strong> (Apache RR 310).
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              TVS Bike Price List in Nepal (2024)
            </h3>

            <table className="w-full text-left table-auto border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100 text-sm">
                  <th className="p-2 border">Model</th>
                  <th className="p-2 border">Price (NPR)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RR 310
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 7,99,900</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RTR 200 4V
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 3,91,900 - 4,24,900 (BS6)</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RTR 160 4V BS6 FI
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 3,96,900</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RTR 160 4V Refresh RD/FD
                    </a>
                  </td>
                  <td className="p-2 border">
                    Rs. 3,23,900 (RD) / 3,20,900 (FD)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RTR 160 4V RD/ABS
                    </a>
                  </td>
                  <td className="p-2 border">
                    Rs. 2,90,900 (RD) - 3,59,900 (ABS)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      Apache RTR 160 2V FD
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 2,99,900</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      TVS Raider 125
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 2,64,900</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      TVS Stryker 125
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 1,96,900 - 2,33,900</td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <a className="text-blue-600 hover:underline" href="http://">
                      TVS Radeon 110
                    </a>
                  </td>
                  <td className="p-2 border">Rs. 1,98,900</td>
                </tr>
              </tbody>
            </table>

            <p className="text-center text-sm text-gray-600">
              *Prices are subject to change based on dealership, location, and
              budget policies.
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default ReadContent;
