import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DateAndTime() {
    // State variables to manage the checked status of checkboxes
    const [foodType1Checked, setFoodType1Checked] = useState(true);
    const [foodType2Checked, setFoodType2Checked] = useState(true);
    const [foodType3Checked, setFoodType3Checked] = useState(true);
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap items-center md:mt-12 mt-8 p-4">
                <div>
                    {/* div 1 starts here */}
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-xl font-mono p-4 md:p-12">Number of Servings</h2>
                        </div>
                        <div className="text-4xl md:pl-12 pl-4">
                            <input className="w-[99%] rounded-lg bg-slate-300" type="number" id="quantity" name="quantity" min="1" max="500" />
                        </div>
                    </div>
                    {/* div 1 ends here */}

                    {/* div 2 starts here */}
                    <div className="flex flex-col p-4 md:p-12">
                        <label className="text-xl">Time of Cooking</label>
                        <div className="flex flex-wrap justify-around gap-6 md:gap-9">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={foodType1Checked}
                                        onChange={() => setFoodType1Checked(!foodType1Checked)}
                                        className="checkbox"
                                    />
                                    <span className="label-text ml-1">Breakfast</span>
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
                                    <span className="label-text ml-1">Lunch</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={foodType3Checked}
                                        onChange={() => setFoodType3Checked(!foodType3Checked)}
                                        className="checkbox"
                                    />
                                    <span className="label-text ml-1">Dinner</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* div 2 ends here */}

                    {/* div 3 starts here */}
                    <div className="p-4 md:p-12">
                        <button className="btn btn-block">Enter Location</button>
                    </div>
                    {/* div 3 ends here */}
                </div>
                <div className="lg:ml-96 md:ml-12">
                    <h1>Calendar - GeeksforGeeks</h1>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
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

            <div className="flex justify-center items-center m-8">
                <button className="btn btn-active btn-primary w-[20%]">Donate</button>
            </div>
           
        </div>
    )
}

export default DateAndTime;
