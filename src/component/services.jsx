import React from "react";
import ServiceCard from "./servicesCard";

function Services() {
    return (
        <div className="flex flex-col mt-12 mb-24">
            <div className="border-y-2 border-slate-200 p-6 pl-0">
                <p className="text-3xl font-semibold">Services on Otamoz</p>
            </div>
            <div className="flex flex-wrap justify-around mt-12 gap-9">
                <ServiceCard
                    title="Hostel Mess"
                    desc="A lot of food is getting wasted in messes of school and college."
                    imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    button="Doorstep Collection"
                />
                <ServiceCard
                    title="Hostel Mess"
                    desc="A lot of food is getting wasted in messes of school and college."
                    imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    button="Doorstep Collection"
                />
                <ServiceCard
                    title="Hostel Mess"
                    desc="A lot of food is getting wasted in messes of school and college."
                    imgLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    button="Doorstep Collection"
                />
               
            </div>
        </div>
    )
}

export default Services;