import React from "react";

function Drawer() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-12 md:p-24 md:gap-9 gap-6 flex flex-col">
                
                <div className="lg:ml-16 md:ml-8">
                    <div>
                        <p className="text-4xl font-semibold">Personal Information</p>
                    </div>
                    <div>
                        <p className="text-xl font-thin">Edit Personal details</p>
                    </div>
                </div>
                <div className="avatar lg:ml-16 md:ml-8">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>


                <div className="flex justify-around w-1/2">
                    <div className="flex flex-col gap-6">
                        <div><p className="font-semibold">Full Name </p></div>
                        <div><p className="font-semibold">Location</p></div>
                        <div><p className="font-semibold">Email</p></div>
                        <div><p className="font-semibold">Nationality</p></div>
                        <div><p className="font-semibold">Date of birth</p></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div><p className="">Full Name </p></div>
                        <div><p className="">Location</p></div>
                        <div><p className="">Email</p></div>
                        <div><p className="">Nationality</p></div>
                        <div><p className="">Date of birth</p></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div><p className=" underline hover:cursor-pointer">Edit</p></div>
                        <div><p className=" underline hover:cursor-pointer">Edit</p></div>
                        <div><p className=" underline hover:cursor-pointer">Edit</p></div>
                        <div><p className="underline hover:cursor-pointer">Edit</p></div>
                        <div><p className=" underline hover:cursor-pointer">Edit</p></div>

                    </div>

                </div>

                <div className="flex justify-center mt-12">
                    <label htmlFor="my-drawer" className="btn btn-primary btn-sm drawer-button">Profile Settings</label>
                </div>

            </div>




            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <p className="font-semibold text-4xl p-4">Profile Settings</p>
                    <li className="text-xl"> <a> <img className="w-6 h-auto" src="/profile.png" alt="" />Personal Information</a></li>
                    <li className="text-xl"> <a> <img className="w-6 h-auto" src="/notif.gif" alt="" />Notifications</a></li>
                    <li className="text-xl"> <a> <img className="w-6 h-auto" src="/invite.png" alt="" />Invite Members</a></li>
                    <li className="text-xl"> <a> <img className="w-6 h-auto" src="/pay.png" alt="" />Payment details</a></li>


                </ul>

            </div>
        </div>
    )
}

export default Drawer;