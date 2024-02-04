import React from "react";

function Navbar(){
    return(
        <>
        <nav className="w-full p-4 pl-8 pr-8 h-auto flex flex-wrap justify-between border-b-2 ">
            <div className="">
                <h2 className=" text-5xl ml-8 font-mono font-bold">Otamoz</h2>
            </div>
            <div className="flex gap-9">
                <div>
                    <button className="btn btn-primary btn-md btn-outline">Donate</button>
                </div>
                <div>
                    <button className="btn btn-primary btn-md btn-outline">Volunteer</button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;