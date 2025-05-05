import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../Context/CartContext";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    price: 49.99,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    price: 59.99,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    price: 29.99,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    price: 19.99,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    price: 39.99,
    aosDelay: "800",
  },
];


const Products = () => {
  const { addToCart } = useCart(); 

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#fea928]">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-md shadow hover:shadow-lg duration-300"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.color}</p>
                <p className="text-sm font-bold text-[#fea928]">${data.price.toFixed(2)}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
              <button
                onClick={() => addToCart(data)}
                className="w-full bg-[#fea928] text-white py-1 px-3 rounded-md hover:bg-[#fea928]/90"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-[#fea928] text-white py-1 px-5 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};



export default Products;
