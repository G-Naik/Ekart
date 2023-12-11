"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/removeItem";
import { plusQuantity } from "../redux/cartQuantity";
import { minusQuantity } from "../redux/cartQuantity";
import Link from "next/link";
import Subtotal from "./Subtotal";



const Cart = () => {
  
  let cartDetailData = useSelector((state) => state.cartReducer.cartData);


  let dispatch = useDispatch()
  


  return (
    <div className=" bg-gray-100">
    <div className="h-screen bg-gray-100 pt-5">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart</h1>
      {cartDetailData.map((item) => (
        <>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" key={item.id}>
            <div className="rounded-lg md:w-2/3">
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={item.thumbnail}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">{item.discountPercentage}</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => dispatch(minusQuantity(item.id))}>
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => dispatch(plusQuantity(item.id))}>
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <p className="text-sm">{                  
                      item.quantity <= 1 ? (Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80) : (item.quantity + 1 ) * (Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80) }</p>
                      <button onClick={() => dispatch(removeItem(item.id))}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </>
      ))}
      {cartDetailData.length === 0 ? 
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-10 text-center text-2xl font-bold">Your cart is Empty</h1>
            <Link href="/Product" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm  md:w-1/4 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"  >Continue Shopping</Link>
          </div>
         :  <Subtotal/>}
    </div>
    </div>
  );
};
export default Cart;
