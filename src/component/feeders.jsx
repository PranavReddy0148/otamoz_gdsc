import React from "react";
import FeederCard from "./feederCard";

function Feeders(){
    return(
        <div className="flex flex-col">
            <div className="border-y-2 border-slate-200 p-6 pl-0">
                <p className="text-3xl font-semibold">Donors and Feeders</p>
            </div>
            <div className="flex flex-wrap justify-around mt-12 gap-9">
                <FeederCard 
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                />
                <FeederCard 
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                />
                <FeederCard 
                title="Hostel Mess"
                desc="A lot of food is getting wasted in messes of school and college."
                imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                />
               

            </div>
        </div>
    )
}

export default Feeders;