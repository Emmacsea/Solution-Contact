import {FaPencilAlt, FaStar, FaLink, FaMap, FaSearchLocation,FaSearchengin } from "react-icons/fa";
import pic from "../assets/Tech 1.webp";

export default function Solution () {
    return(
        <div className="flex justify-center items-center bg-gray-300 h-screen px-3">
            <div className="flex justify-center items-center bg-slate-50 w-full h-auto rounded-md p-2">
                <div className="bg-blue-600 rounded-md  w-full px-3 py-2">
                    <header className="flex justify-between items-center">
                        <div><h2 className="text-white text-lg border-2 border-violet-400 rounded-full w-7 h-7 flex justify-center items-center">E</h2></div>
                        <nav className="rounded-full bg-slate-100 px-8 py-1 ">
                            <ul className="list">
                                <li>Home</li>
                                <li>About</li>
                                <li>Categories</li>
                                <li>Pricing</li>
                            </ul>
                        </nav>
                        <div className="rounded-full bg-yellow-300 px-4 py-2">
                            <p className="text-black text-base uppercase">
                                Contact Us
                            </p>
                        </div>
                    </header>

                    <main className="">
                        <section className="flex space-x-5 text-center justify-center items-center px-72 pt-8 pb-10">
                            <div>
                                <FaStar className="text-yellow-400 text-lg font-bold"/>
                            </div>

                            <div>
                                <p className="text-white text-3xl capitalize font-bold ">
                                    Solutions  
                                    <span className="rounded-full mx-2 relative bg-slate-50 px-8  ">
                                        <FaPencilAlt className="text-yellow-400 text-2xl absolute -top-2 left-5 "/>
                                    </span>
                                    meticulously designed for <span className="rounded-full bg-yellow-300 px-2 text-black font-bold">effortless </span>
                                    productivity.
                                </p>
                                <p className="text-center text-base font-extralight text-neutral-100">
                                    We&apos;re a branding agency with a speciality in direct to consumer and chanllenger brands:
                                    those that think differently, act differently and walk their talk
                                </p>
                                <button className="rounded-full text-neutral-700 uppercase bg-slate-200 px-5 text-base py-1 mt-3">
                                    Explore our services
                                </button>
                            </div>

                            <div>
                                <FaStar className="text-yellow-400 text-lg font-bold"/>
                            </div>
                        </section>

                        <section className="flex items-center">
                            <div className=" ">
                                <div><img className=" rounded-tl-2xl rounded-br-2xl w-36 h-32" src={pic} alt="" /></div>
                                <p className=" text-red-400 text-base font-medium">
                                    E Internet marketing agency is a full
                                    -service digital marketing agency
                                </p>

                            </div>

                        </section>
                    </main>
                </div>


            </div>
            
        </div>
    )
}