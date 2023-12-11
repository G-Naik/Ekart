"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"


const Payments = () => {

   const [checkUser , updateUser] = useState([])

   let route = useRouter()


   useEffect(() => {
    checkUserAlreadyExist();
   },[])

   async function checkUserAlreadyExist () {
        let getdetails = await fetch("http://localhost:4003/users")
        let userDeatil = await getdetails.json()
        updateUser(userDeatil)
   }



  let [userDetails , updateUserDetails ] = useState({
    firstName:"",
    lastName:"",
    gender:"",
    contactNumber:"",
    emailAddress:"",
    address:"",
    pincode:"",
    district:"",
    state:"",
    country:""
   })


   let submitUserDeatils = (e) => {
    e.preventDefault();

    let data = checkUser.find((item) => item.emailAddress === userDetails.emailAddress)

    if(!data){
        route.push("/register")
    }else{
        fetch(`http://localhost:4003/users/${data.id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({...data,"userDetails":userDetails}),
        })
        alert("Submitted")
        route.push("/Payments")
    }    
   }

   let getUserDetails = (e) => {
        updateUserDetails(prevState => ({...prevState,[e.target.name]:e.target.value}))
   }

   const totalPrice = useSelector((state) => state.cartReducer.cartData);

  const subtotal = totalPrice.reduce(
    (acc, item) => acc + ((Math.floor(item.price * ( 100 - item.discountPercentage) /  100 ) * 80)) * item.quantity,
    0
  );

  const total = subtotal + 40

  return (
    <div className="flex justify-center">
    <div className="flex justify-around min-h-screen md:1/2">
        <section>
            <div className="flex pb-10 ">
                <h1 className="text-center mt-5 font-bold text-2xl md:pl-20 pl-2 pr-5">Shipping Address &gt; </h1>
                <h1 className="text-center mt-5 font-bold text-2xl text-slate-400">Payments</h1>
            </div>
            


            <div className="flex justify-center md:pl-10 md:pr-10">
                <form action="" onSubmit={submitUserDeatils}>
                    
                    <section >
                    <div className="p-2">
                    <div>
                            <div className="mb-2">
                                <label htmlFor="FirstName">First Name</label>
                            </div>
                            <input type="text" name="firstName" onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" required />
                        </div>
                        <div className="mt-2">
                            <div className="mb-2">
                                <label htmlFor="LastName">Last Name</label>
                            </div>
                            <input type="text" name="lastName"  onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" required />
                        </div>

                        <div className="mt-2">
                            <div>
                                <label htmlFor="">Gender</label>
                            </div>
                            <div className="flex" onChange={getUserDetails} required>
                                <div className="pr-2">
                                    <input type="radio" className="pr-2" name="gender" value="male"/> Male
                                </div>
                                <div className="pr-2">
                                    <input type="radio" className="pr-2" name="gender" value="female" /> Female
                                </div>
                                <div>
                                    <input type="radio" className="pr-2" name="gender" value="rather not to say" /> Rather not to say
                                </div>
                            </div>
                        </div>

                        <div className="md:flex mt-2">
                            <div className="md:pr-3" >
                                <div className="mb-2">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                </div>
                                <input type="tel" name="contactNumber" required   onChange={getUserDetails} className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                </div>
                                <input type="email" name="emailAddress" required  onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="mb-2">
                                <label htmlFor="address">Address</label>
                            </div>
                            <input type="text" name="address" required onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                        </div>
                        <div className="md:flex mt-2">
                            <div className="md:pr-3">
                                <div className="mb-2">
                                    <label htmlFor="pincode">PinCode</label>
                                </div>
                                <input type="number" name="pincode" required maxLength="6" onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="district">City/District</label>
                                </div>
                                <input type="text" name="district"  required onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <div className="pr-3">
                                <div className="mb-2">
                                    <label htmlFor="state">State</label>
                                </div>
                                <input type="text" name="state" required  onChange={getUserDetails}  className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="country">Country</label>
                                </div>
                                <input type="text" name="country" required  onChange={getUserDetails}   className="block w-full  border-solid border-2 border-black rounded-xl  font-serif p-3" />
                            </div>
                        </div>

                    </div>
                    </section>
                    <div className="p-2 mt-7 mb-5">
                        <button  className="block bg-slate-900 text-white px-12 py-3 rounded-md border-3 border-transparent w-full">
                            <span className="md:hidden">{total}</span> Proceed to Payment</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
    <div className="hidden md:block w-1/4 mt-10 h-full rounded-lg border bg-white p-6 shadow-md translate-y-20 border-solid border-2 border-black">
          <div>
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
                <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold ml-7">{total}</p> 
                </div>
                </div>
            </div>
    </div>
        
    </div>
  )
}
export default Payments