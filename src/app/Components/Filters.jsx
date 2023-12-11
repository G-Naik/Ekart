"use client"
import { useDispatch } from "react-redux";
import { sendFilters } from "../redux/filterAction";
import { useState } from "react";

const Filters = () => {

  let dispatch = useDispatch();


  const sendValue = (name) => {
    dispatch(sendFilters(name))
  }

  let [filterContent,updateFilterContent] = useState(false)

  const displayFilterOption = () => {
    if(!filterContent){
      updateFilterContent(true)
    }else{
      updateFilterContent(false)
    }
  }


  return (
    <section>

    <div className="sm:block fixed bottom-10 right-5 md:hidden">
      <h1 className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center " onClick={displayFilterOption}><i class="fa-solid fa-filter"></i></h1>
    </div>
        <section class={filterContent ? `block`:`hidden`}>
          
        <div className="w-full fixed bottom-0 bg-black text-white">
        <div className="sm:block relative top-50 translate-x-80">
          <h1 className="bg-black text-white w-10 h-10 rounded flex items-center justify-center " onClick={displayFilterOption}>X</h1>
        </div>
          <div className="p-6" id="filter-section-mobile-0">
                              <div class="space-y-6">
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="smartphones">Smartphones</button>
                                </div>
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="laptops"  >Laptops</button>
                                </div>
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="fragrances" >Perfumes</button>
                                </div>
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="skincare"  >Skin Care</button>
                                </div>
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="groceries" >Groceries</button>
                                </div>
                                <div>
                                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full" onClick={(e) => sendValue(e.target.value)} value="home-decoration"  >Home-Decoration</button>
                                </div>
                              </div>
            </div>
        </div>
        </section>
  
      <section className="">
      <div className="md:fixed lg:left-0 ">
              <div class="border-t border-gray-200 px-4 py-6">
                      <h3 class="-mx-2 -my-3 flow-root">
                      
                        <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0">
                          <span class="font-medium text-gray-900">Category</span>
                        </button>
                      </h3>
                    <div class="pt-6" id="filter-section-mobile-0" onChange={(e) => sendValue(e.target.value) }>
                        <div class="space-y-6">
                        
                          <div class="flex items-center">
                            <input id="filter-mobile-color-0"  type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"   name="filter" value="smartphones" />
                            <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">Smartphones</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-1"   type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"   name="filter" value="laptops" />
                            <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Laptops</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-2" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" name="filter" value="fragrances" />
                            <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Fragrances</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-3"  type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"  name="filter" value="skincare" />
                            <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Skin Care</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-4" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"  name="filter" value="groceries" />
                            <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Groceries</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-5"  type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" name="filter" value="home-decoration" />
                            <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Home Decoration</label>
                          </div>
                          <div class="flex items-center">
                            <input id="filter-mobile-color-0"  type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" name="filter" value="all-products" />
                            <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">All</label>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
      </section>
      
    </section>

  )
}
export default Filters