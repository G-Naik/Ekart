
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Subtotal = () => {

 const isUserLoggedIn = useSelector((state) => state.profileCred.profileDetails)

 console.log(isUserLoggedIn)

 useEffect(() => {},[isUserLoggedIn])

  const totalPrice = useSelector((state) => state.cartReducer.cartData);

  const subtotal = totalPrice.reduce(
    (acc, item) => acc + ((Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80)) * item.quantity,
    0
  );

  let route = useRouter()

  const total = subtotal + 40; // Assuming shipping cost is fixed at 40

  const checkUserLoggedIn = () => {
    if(isUserLoggedIn === null ){
      route.push("/login")
    }else{
      route.push("/Shipping")
    }
  }
  return (
    <div className="md:flex justify-center">
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
        {totalPrice.map((item) => (
          <div key={item.id} className="mb-2 flex justify-between">
            <p className="text-gray-700">{item.title}</p>
            <p className="text-gray-700">{(Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80)}</p>
          </div>
        ))}
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">40</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold ml-7">{total}</p> 
          </div>
        </div>
        <button onClick={checkUserLoggedIn} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
      </div>
  );
};

export default Subtotal;
