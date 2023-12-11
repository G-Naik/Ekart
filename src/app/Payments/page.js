"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [userCard, setUserCard] = useState({
    cardusername: "",
    cardnumber: "",
    cardexpiredate: "",
    cardcvv: "",
  });

  const cardData = useSelector((state) => state.cartReducer.cartData);
  const userid = useSelector((state) => state.profileCred.profileDetails);
  const route = useRouter();

  const totalPrice = cardData;
  const subtotal = totalPrice.reduce(
    (acc, item) =>
      acc +
      Math.floor((item.price * (100 - item.discountPercentage)) / 100) *
        80 *
        item.quantity,
    0
  );
  const total = subtotal + 40;

  const getUserCardDetails = (e) => {
    setUserCard((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }));
  };

  const submitOrder = (e) => {
    e.preventDefault()
    if (paymentMethod === "credit") {
      fetch(`http://localhost:4003/users/${userid.id || null}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userid, cardDetails: userCard, COD: "no" }),
      })
        .then(() => {
          alert("Order successful with credit Card");
          route.push("/");
        })
        .catch((error) => {
          console.error("Error submitting card details:", error);
        });
      alert("credit details")
      route.push("/")
    }
  };

  const cashOnDeliverySubmit = (e) => {
    e.preventDefault()
     if(paymentMethod === "cod"){
      fetch(`http://localhost:4003/users/${userid.id || null}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userid, cardDetails: null, COD: "Yes" }),
      })
        .then(() => {
          alert("Order successful with Cash on Delivery");
          route.push("/");
        })
        .catch((error) => {
          console.error("Error submitting cod:", error);
        });
     }
  }

  
  return (
    <div className="md:flex justify-center min-h-screen">
      <div className="md:w-1/2 w-full">
        <section className="flex justify-center pb-10">
          <h1 className="text-center mt-5 font-bold text-2xl text-slate-400 ">Shipping &gt;</h1>
          <h1 className="text-center mt-5 font-bold text-2xl md:pl-5 pl-2 pr-5">Payments</h1>
        </section>
            <div onClick={() => setPaymentMethod("credit")} className="border-solid border-2 bg-slate-900 text-white mr-10 rounded-xl h-20 flex justify-center items-center ">
                  <button>Credit Card</button>
            </div>
            <section className={paymentMethod === "credit" ? `block mr-10`:`hidden`}>
                    <form action="" onSubmit={submitOrder}>
                      <section>
                        <div className="pl-10 pr-10 mt-10">
                          <div>
                            <label htmlFor="">Card Holder Name</label>
                          </div>
                          <div>
                            <input type="text" id="cardusername" name="cardusername" className="border-solid border-2 w-full border-black h-10 rounded-xl" onChange={getUserCardDetails}
                            required={paymentMethod === "credit" ? true : false}
                            />
                          </div>
                        </div>
                        <div className="pl-10 pr-10 mt-3">
                          <div>
                            <label htmlFor="">Card Holder Name</label>
                          </div>
                          <div>
                            <input type="text" id="cardnumber" name="cardnumber" className="border-solid border-2 w-full border-black h-10 rounded-xl" onChange={getUserCardDetails}
                            required={paymentMethod === "credit" ? true : false}
                            />
                          </div>
                        </div>
                        <section className="flex justify-center pb-5">
                        <div className="pl-10 pr-3 mt-3 w-3/4">
                          <div>
                            <label htmlFor="">Expiry Date</label>
                          </div>
                          <div>
                            <input type="text" id="expDate" name="expDate" className="border-solid border-2 w-full border-black h-10 rounded-xl" onChange={getUserCardDetails}
                            required={paymentMethod === "credit" ? true : false}
                            />
                          </div>
                        </div>
                        <div className="pr-10 mt-3">
                          <div>
                            <label htmlFor="">CVV</label>
                          </div>
                          <div>
                            <input type="text" id="cardcvv" name="cardcvv" className="border-solid border-2 w-full border-black h-10 rounded-xl" onChange={getUserCardDetails} 
                            required={paymentMethod === "credit" ? true : false}
                            />
                          </div>
                        </div>
                        </section>
                        <div className="pl-10 pr-10 pb-10">
                              <button className="w-full bg-slate-900 text-white h-10 rounded-xl ">Place Order</button>                
                        </div>
                      </section>
                    </form>
            </section>
              <div className="border-solid border-2 bg-slate-900 text-white mr-10 rounded-xl h-20 flex justify-center items-center mt-10">
                <button onClick={() => setPaymentMethod("cod") } >Cash On Delivery</button>
              </div>
              <section className={paymentMethod === "cod"  ? 'block' : "hidden"}>
                <form action="" onSubmit={cashOnDeliverySubmit}>
                  <div className="border-solid border-2 bg-slate-900 text-white mr-10 mt-20 rounded-xl h-10 flex justify-center items-center">
                    <button>Place Order</button>
                  </div>
                  </form>
               </section>
      </div>

      <div className="hidden md:block w-1/4 mt-10 h-full rounded-lg border bg-white p-6 shadow-md translate-y-20 border-solid border-2 border-black">
        <div>
          {totalPrice.map((item) => (
            <div key={item.id} className="mb-2 flex justify-between">
              <p className="text-gray-700">{item.title}</p>
              <p className="text-gray-700">
                {Math.floor((item.price * (100 - item.discountPercentage)) / 100) * 80}
              </p>
            </div>
          ))}
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">40</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold ml-7">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
