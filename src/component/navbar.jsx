import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="w-full p-4 pl-8 pr-8 h-auto flex flex-wrap justify-between border-b-2 ">
                <div className="">
                    <NavLink
                        to="">
                        <h2 className="hover:cursor-pointer text-5xl ml-8 font-mono font-bold">Otamoz</h2>
                    </NavLink>
                </div>
                <div className="flex gap-9">

                    <div>
                        <NavLink
                            to="donate">
                            <button className="btn btn-primary btn-md btn-outline">Donate</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="volunteers">
                            <button className="btn btn-primary btn-md btn-outline">Volunteer</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="profile">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </NavLink>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;