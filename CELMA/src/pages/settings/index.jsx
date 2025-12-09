import React from "react";
import { Link } from "react-router-dom";
import galleryImg from "../../assets/gallery-add.png";
// import AccountSetting from "../../components/account-setting/account-setting";

const Settings = () => {
  return (
    <div>
      <div className="p-8 w-full text-sm font-Nunito shadow-lg mx-auto">
        <p className=" py-4">Settings</p>

        {/* Tabs */}
        <div className="flex space-x-6 border-b pb-2">
          <button className="text-[#400167] font-semibold border-[#400167]">
            Account Setting
          </button>
          <Link
            to="/settings/LoginSecurity"
            className="text-gray-500 hover:text-[#400167]"
          >
            Login & Security
          </Link>
        </div>

        {/* Profile Picture Upload */}
        <div className="mt-6">
          <p className="font-semibold py-2">Your Profile Picture</p>

          <div className=" border-2 mb-6 grid justify-center items-center w-[130px] h-[130px] bg-[#E9E0EC] border-dotted rounded-[18px]">
            <div className="">
              <img
                className=" w-10 h-10 grid justify-center items-center  mx-auto"
                src={galleryImg}
                alt="galleryImg"
              />
              <p className=" text-[#4C535F]  font-Nunito text-center">
                Upload <br /> your photo
              </p>
            </div>
          </div>

          <hr className=" border-2 my-4" />
        </div>

        {/* Form */}
        <div className="my-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">Full Name</label>
              <input
                className="p-3 bg-[#E9E0EC] outline-none w-full rounded"
                placeholder="Please enter your full name"
              />
            </div>

            <div>
              <label htmlFor="">Email</label>
              <input
                className="p-3 outline-white bg-[#E9E0EC] w-full rounded"
                placeholder="Please enter your email"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">Username</label>
              <input
                className="p-3 bg-[#E9E0EC] outline-none w-full rounded"
                placeholder="Please enter your username"
              />
            </div>
            <div>
              <label htmlFor="">Phone number</label>
              <div className="flex">
                <span className="p-3 bg-purple-100 outline-none rounded-l">
                  +1
                </span>
                <input
                  className="p-3 bg-[#E9E0EC] w-full rounded-r"
                  placeholder="Please enter your phone number"
                />
              </div>
            </div>
          </div>
          <label htmlFor="">Bio</label>
          <textarea
            className="w-full p-3 bg-[#E9E0EC] outline-none rounded h-32"
            placeholder="Write your Bio here e.g your hobbies, interests ETC"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-[#400167] rounded-[8px] text-white px-6 py-2">
            Update Profile
          </button>
          <button className="text-gray-500">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
