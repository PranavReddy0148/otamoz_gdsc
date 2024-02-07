import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Volunteering() {
    const [foodType1Checked, setFoodType1Checked] = useState(true);
    const [foodType2Checked, setFoodType2Checked] = useState(true);
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="flex flex-col flex-wrap justify-center items-center md:gap-12 gap-9 mt-12">
            <div className="flex justify-center items-center">
                <h1 className="md:text-5xl  text-3xl font-mono">
                    Volunteering Registration
                </h1>
            </div>
            <div>
                <p className="text-xl font-mono p-12 mb-12">Donate your excess food and help to reduce food wastage
                    while making a postitive impact on society. </p>
            </div>



            <div>
                <div className="flex flex-col">
                    <label className="text-xl p-4">Your preferred way to help feed people</label>
                    <div className="flex flex-wrap justify-around">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={foodType1Checked}
                                    onChange={() => setFoodType1Checked(!foodType1Checked)}
                                    className="checkbox"
                                />
                                <span className="label-text ml-4">Food Collector</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={foodType2Checked}
                                    onChange={() => setFoodType2Checked(!foodType2Checked)}
                                    className="checkbox"
                                />
                                <span className="label-text ml-4">Food Distributer</span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>



            <div>
                <h1 className="text-xl p-4">Your preferred time to help feed people</h1>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>




            <div className="flex justify-center items-center pt-4">
                <label className="text-2xl font-mono " htmlFor="timeInput">Select a time:</label>
                <input
                    className="text-2xl ml-8 font-mono border-4 border-black border-6"
                    type="time"
                    id="timeInput"
                    name="timeInput"
                    value={time}
                    onChange={handleChange}
                />
            </div>


            <div>
                <h1 className="text-xl mb-8">Your preferred location to feed people</h1>
                <select className="select select-primary w-full max-w-xs text-xl">
                    <option disabled selected>Choose Priority Areas</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>

               <div className="flex justify-center items-center m-8"> <button className="btn w-[120%] btn-secondary">Volunteer</button></div>
            </div>

        </div>
    )
}

export default Volunteering;