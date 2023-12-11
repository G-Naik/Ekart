"use client"
import service from "../Api/service";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { FetchApiData } from "../redux/action";
import { useRouter } from "next/navigation";
import Loader from "./Loader";


const Product = () =>  {

  let productData = useSelector(state => state.productReducer.products)
  let filteringData = useSelector(state => state.productReducer.filteredData)

  let dispatch = useDispatch()

  let router = useRouter()

  useEffect(() => {
      fetchProductsData()
  },[dispatch])

  const fetchProductsData = async() => {
    let apiData = await service()
    dispatch(FetchApiData(apiData))
  }

  let DataUpdation = filteringData.length <= 0 ? productData : filteringData ;
  
   
  return (
    <div className="grid grid-cols md:grid-cols-3">
    {

     DataUpdation &&  DataUpdation.map((item) => (
        <>
            <div className="relative m-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" onClick={() => router.push(`/Product/${item.id}`)}>
                  <img className="object-cover" src={item.thumbnail} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountPercentage} %</span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{item.title}</h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">Rs.{Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80}</span>
                      <span className="text-sm text-slate-900 line-through">{item.price* 80}</span>
                    </p>
                  </div>
                    <button onClick={() => router.push(`/Product/${item.id}`)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm  w-full font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy now </button>
                </div>
              </div>
        </>
      ))
      }

    </div>
  )
}

export default Product