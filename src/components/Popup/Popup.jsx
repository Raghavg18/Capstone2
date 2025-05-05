import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleOrderClick = () => {
    if (!isAuthenticated) {
      setOrderPopup(false);
      navigate('/login');
      return;
    }
    console.log('Order placed');
    setOrderPopup(false);
  };
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <div className="mt-4">
                {!isAuthenticated ? (
                  <div className="text-center py-4">
                    <p className="text-red-500 mb-4">Please login to place an order</p>
                    <button
                      onClick={() => {
                        setOrderPopup(false);
                        navigate('/login');
                      }}
                      className="bg-[#fea928] hover:bg-[#ed8900] transition-all duration-200 text-white py-1 px-4 rounded-full"
                    >
                      Login
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <div className="flex justify-center">
                      <button
                        onClick={handleOrderClick}
                        className="bg-[#fea928] hover:bg-[#ed8900] transition-all duration-200 text-white py-1 px-4 rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
