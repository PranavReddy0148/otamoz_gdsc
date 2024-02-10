import React from "react";

function Login() {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            <div className="h-4/5 w-full flex flex-col gap-9">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl footer-title text-slate-800">Login</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl font-mono">Username/Email Id: </span>
                            <span className="label-text-alt">required</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-xl font-mono">Password: </span>
                            <span className="label-text-alt">required</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-primary">Login</button>
                </div>

               <div className="flex justify-center flex-wrap items-center gap-10">
               <div className="">
                <p className="link link-hover text-blue-600">Forgot Password?</p>
                </div>
                <div className="">
                <p className="link link-hover text-blue-600">New User?</p>
                </div>
               </div>
                

            </div>
        </div>
    )
}

export default Login;
