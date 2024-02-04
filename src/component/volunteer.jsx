import React from "react";
import VolunteerCard from "./volunteerCard";

function Volunteers(){
    return(
        <div className="flex flex-col mt-12">
            <div className="border-y-2 border-slate-200 p-6 pl-0">
                <p className="text-3xl font-semibold">Volunteers and Rescuers</p>
            </div>
            <div className="flex flex-wrap justify-around mt-12 gap-9">
                <VolunteerCard
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                img="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                button="No cost"
                />
                <VolunteerCard
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                img="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                button="No cost"
                />
                <VolunteerCard
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                img="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                button="No cost"
                />
             
               

            </div>
        </div>
    )
}

export default Volunteers;