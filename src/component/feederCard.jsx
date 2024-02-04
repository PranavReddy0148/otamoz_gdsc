import React from "react";

function FeederCard({title,desc,imgLink}) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={imgLink} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Donate Now</button>
                </div>
            </div>
        </div>
    )
}

export default FeederCard;