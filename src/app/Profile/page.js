"use client"

import { useSelector } from "react-redux"


const Profile = () => {

    let profileDetail = useSelector((state) => state.profileCred.profileDetails)

  return (
    <div className="mt-10">
        <h1 className="text-center text-2xl font-bold">Profile Page</h1>
        <section className="flex justify-center flex-col items-center mt-10">
        
            <div className="border-solid border-2 border-black rounded-xl w-1/2 h-40">
                <div className="flex justify-center items-center h-40 ">
                    <div className="w-10 bg-slate-200 h-10 flex items-center justify-center rounded-full">
                        {profileDetail?.username?.charAt(0) || "N"}
                    </div>
                    <div className="w-3/4 pl-10">
                        <h3 className="text-lg font-bold">{profileDetail?.username|| "Hi User" }</h3>
                        <span>Welcome to the Ekart </span><br/>
                        <span>A perfect destination for all your needs</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-solid border-2 border-black rounded-xl w-1/2 h-20 flex items-center pl-5">
                Address details
            </div>
            <div className="mt-10 border-solid border-2 border-black rounded-xl w-1/2 h-20 flex items-center pl-5">
                Orders
            </div>
            <button className="mt-10 w-1/2 rounded-xl bg-slate-900 text-white h-10">Logout</button>
        </section>
    </div>
  )
}
export default Profile