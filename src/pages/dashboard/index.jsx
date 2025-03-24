import React from "react";
import Banner from "../../components/banner/Banner";
import lessonImg from "../../assets/unsplash_QQ9LainS6tI.png";
import left from "../../assets/btn (1).png";
import right from "../../assets/btn (2).png";
import { Table } from "../../components/Tables";
import icanImg from "../../assets/Mask group (4).png";
import userImg from "../../assets/Mask group (5).png";

const Index = () => {
  const userData = [
    {
      image: userImg,
      name: "Temitope OgoOluwa",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
      action: "Show Details",
    },
    {
      image: userImg,
      name: "Temitope OgoOluwa",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
      action: "Show Details",
    },
    {
      image: userImg,
      name: "Temitope OgoOluwa",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
      action: "Show Details",
    },
  ];
  return (
    <div>
      <div className=" w-[%]">
        <Banner />
        <div className="flex  justify-between mb-6">
          {["WASSCE/NECO", "UTME/PUTME", "JUPEB/A-LEVEL", ""].map(
            (category) => (
              <div
                key={category}
                className="flex-1 bg-white p-4 rounded-xl shadow text-center mx-2"
              >
                <h3 className="text-sm text-gray-500 font-Nunito font-light">
                  220 Students
                </h3>
                <p className="text-sm leading-4 font-extrabold Satoshi text-[#202020]">
                  {category}
                </p>
              </div>
            )
          )}
        </div>

        <div className="mb-6 w-full Satoshi">
          <div className=" flex py-4 justify-between">
            <h3 className="text-lg font-bold mb-4">All Lessons</h3>
            <div className=" flex gap-2">
              <img
                className=" w-6 h-6"
                src={left}
                alt=""
              />
              <img
                className=" w-6 h-6"
                src={right}
                alt=""
              />
            </div>
          </div>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex-1 bg-white p-6 rounded-xl shadow"
              >
                <img
                  src={lessonImg}
                  alt="Lesson"
                  className=" w-60 rounded mb-4"
                />

                <div className=" bg-[#702DFF33] w-fit px-6 rounded-full">
                  <p className=" text-[#702DFF] font-[400] leading-3 text-[8px]">
                    ICAN CATEGORY
                  </p>
                </div>
                <h4 className="text-sm mt-4">
                  Beginner's Guide To Becoming A Professional/Certified
                  Accountant
                </h4>

                <div className=" flex items-center gap-4">
                  <img
                    className=" w-10 h-10"
                    src={icanImg}
                    alt="icanImg"
                  />
                  <div className="">
                    <p className="text-[10px] font-[500] leading-3 text-[#202020]">
                      Tomide Gabriel
                    </p>
                    <p className=" font-Nunito text-[8px] leading-3 font-[400] text-[#202020]">
                      ICAN Tutor
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" bg-white rounded-lg mt-6 ">
            <div className="p-3">
              <table className="w-full text-[#013467] mb-6 border-collapse">
                <thead>
                  <tr className="text-left text-[#3F3F3F] text-sm leading-3 font-Nunito">
                    {/* <th className="font-semibold py-2 px-4">Name</th> */}
                    <th className="font-semibold py-2 px-4">Student Name</th>
                    <th className="font-semibold py-2 px-4">Phone Number</th>
                    <th className="font-semibold py-2 px-4">Email Address</th>
                    <th className="font-semibold py-2 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <Table
                      user={user}
                      key={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
