import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    price: 29.99,
    description: "Casual wear with comfortable cotton fabric.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    price: 39.99,
    description: "Trendy printed shirt perfect for all occasions.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    price: 24.99,
    description: "Stylish shirt designed especially for women.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  const { addToCart } = useCart(); 

  const handleOrder = (product) => {
    addToCart(product); 
    if (handleOrderPopup) {
      handleOrderPopup(product); 
    }
  };

  return (
    <div className="container">
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-[#fea928]">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover our top rated and most loved items
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#fea928] hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            <div className="h-[100px]">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            <div className="p-4 text-center">
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                {data.description}
              </p>
              <p className="mt-2 font-semibold">${data.price}</p>
              <button
                onClick={() => handleOrder(data)}
                className="bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#fea928]"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
