import React from "react";
import Count from "./counts";
import { NavLink } from "react-router-dom";

function Search() {
    return (
        <div className="flex flex-col bg-white flex-wrap p-4">
            <div className="w-full h-[50]">
                <img className="w-full h-[70vh]" src="https://images.unsplash.com/photo-1536703219213-0223580c76b2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            {/* <div className="absolute z-10 top-[50%] left-[30%]">
            <Count/>
            </div> */}
            <div className="flex flex-wrap mt-12">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

            </div>
            <div className="flex flex-wrap gap-3 mt-4 mb-8">
                <div className="badge badge-ghost hover:cursor-pointer">
                    <NavLink
                        to="../priorityArea">Priority Areas
                    </NavLink>
                </div>

                <div className="badge badge-ghost hover:cursor-pointer">
                    <NavLink
                        to="volunteers">Volunteering Work
                    </NavLink></div>
                <div className="badge badge-ghost hover:cursor-pointer">
                    <NavLink
                        to="donate">Donate
                    </NavLink></div>
            </div>
        </div>
    )
}

export default Search;