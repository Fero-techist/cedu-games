import React, { useState } from "react";
import { Btn, RoundedBtn } from "../../components/button.jsx/Btn";
import { SuccessfulDelete, DeleteItem } from "../../components/modal";
import caristasImage from "../../assets/Ellipse 38 (1).png";
import courseImg from "../../assets/Leadership.png";
import verifyDel from "../../assets/verifyDel.png";
import { CourseCard } from "../../components/card";
import { useNavigate } from "react-router-dom";

const InstructorPage = () => {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] = useState();
  const [inviteEmail, setInviteEmail] = useState("");
  const user = {
    name: "James Brown",
    email: "jamesbrown@gmail.com",
    profilePicture: caristasImage, // Add the correct path to the profile picture
    Tutors: 10,
    Lessons: 5,
    Students: 3,
    YearsonCELMA: 2,
    perCourse: 25,
    Price: "$25",
    availability: "ON",
    lessons: [
      {
        subject: "Mathematics",
        progress: 75,
        totalTopics: 7,
        status: "In Progress",
      },
      {
        subject: "Mathematics",
        progress: 75,
        totalTopics: 7,
        status: "Completed",
      },
      {
        subject: "Mathematics",
        progress: 75,
        totalTopics: 7,
        status: "Yet to Start",
      },
      {
        subject: "Mathematics",
        progress: 75,
        totalTopics: 7,
        status: "Completed",
      },
      {
        subject: "Mathematics",
        progress: 75,
        totalTopics: 7,
        status: "Completed",
      },
    ],
  };

  const courses = [
    {
      title: "Course Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis morbi fermentum molestie mauris risus sit mi nullam.",
      duration: "2.5 hours",
      topics: "3 ",
      image: courseImg,
    },
    {
      title: "Course Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis morbi fermentum molestie mauris risus sit mi nullam.",
      duration: "2.5 hours",
      topics: "3 ",
      image: courseImg,
    },
    {
      title: "Course Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis morbi fermentum molestie mauris risus sit mi nullam.",
      duration: "2.5 hours",
      topics: "3 ",
      image: courseImg,
    },
    {
      title: "Course Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis morbi fermentum molestie mauris risus sit mi nullam.",
      duration: "2.5 hours",
      topics: "3 ",
      image: courseImg,
    },
  ];

  const handleDeleteUser = () => {
    setOpenDeleteModal(true);
  };

  const cancelModal = () => setOpenDeleteModal(false);

  const confirmDelete = () => {
    setOpenDeleteModal(false);
    setOpenSuccessfulDeleteModal(true);
  };

  const closeSuccessfulDeleteModal = () => {
    setOpenSuccessfulDeleteModal(false);
  };

  return (
    <div>
      <p className=" font-satoshi py-2">All Instructors</p>
      <div className="p-4 m-3">
        <h1 className="font-[700] font-satoshi text-[#400167] text-[20px] leading-[30px] mb-6 ">
          {user.name} Details
        </h1>
        <div className=" mb-6 bg-[#DDD3FF] p-4 rounded-md w-full h-[156px]">
          {/* User Details */}
          <div className="flex mt-5">
            <div>
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-[100px] h-[100px] rounded-full mr-5"
              />
            </div>
            <div>
              <div className="flex items-start gap-32">
                <div>
                  <h2 className="text-[24px] text-[#620899] font-semibold leading-[]">
                    {user.name}
                  </h2>
                  <p className="text-black">{user.email}</p>
                </div>
              </div>
              <p className="text-[12px] font-[300] w-[413px] font-satoshi leading-[19.62px] mt-3 text-black">
                Lorem ipsum dolor sit amet consectetur. Non turpis risus rhoncus
                vulputate. Lorem ipsum dolor sit amet consectetur. Non turpis
                risus rhoncus vulputate.
              </p>
            </div>
          </div>
        </div>
        {/* User Stats */}
        <h3 className="text-[20px] text-[#013467] font-semibold mb-4 leading-[23px]">
          Overview
        </h3>

        {/* User Stats */}
        <div className="flex items-center gap-10 mb-6">
          <div
            className="bg-white p-4 roun  ded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid rgba(4, 167, 167, 0.5)" }}
          >
            <p className="text-center text-[32px] font-[500]">{user.Tutors}</p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Total Courses
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid rgba(241, 130, 217, 0.5)" }}
          >
            <p className="text-center text-[32px] font-[500]">
              {user.Students}
            </p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Students
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid rgba(2, 105, 208, 0.5)" }}
          >
            <p className="text-center text-[32px] font-[500]">
              {user.YearsonCELMA}
            </p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Years on CELMA
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid rgba(0, 197, 67, 0.5)" }}
          >
            <p className="text-center text-[32px] font-[500]">{user.Price}</p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Per Course
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid black" }}
          >
            <p className="text-center text-[32px] font-[500]">
              {user.availability}
            </p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Availability
            </p>
          </div>
        </div>

        <div>
          <header className="flex justify-between items-center py-4">
            All Lessons
          </header>
          <div className="grid grid-cols-4 gap-2 px-4">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
              />
            ))}
          </div>

          <button
            onClick={handleDeleteUser}
            className="bg-[#f7ada880]  text-[#e33f33] py-[10px] px-[18px] rounded-[10px] font-[500] text-[16px] leading-[20px] mr-2 self-end"
          >
            Delete User
          </button>
        </div>

        <DeleteItem
          isOpen={openDeleteModal}
          onClose={cancelModal}
        >
          <div>
            <h1 className="text-[20px] text-[#400167] font-bold">
              Delete Item?
            </h1>
            <p className="text-[14px] my-3">
              Are you sure you want to delete ‘Item’? Action can not be
              reversed.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <button
              className="bg-[#5002D0] text-white text-[16px] font-medium py-3 px-4 rounded-lg w-[102px]"
              onClick={confirmDelete}
            >
              Continue
            </button>
            <button
              className="text-[16px] font-medium py-3 px-4 rounded-lg w-[87px] text-[#E34033]"
              style={{ backgroundColor: "rgba(227, 64, 51, 0.2)" }}
              onClick={cancelModal}
            >
              Cancel
            </button>
          </div>
        </DeleteItem>

        <SuccessfulDelete
          isOpen={openSuccessfulDeleteModal}
          onClose={closeSuccessfulDeleteModal}
        >
          <div>
            <div>
              <img
                src={verifyDel}
                alt="verifyDelete logo"
                className=" w-20"
              />
            </div>

            <div className="mt-10">
              <h2 className="text-[#400167] text-[20px] leading-[27px] font-bold mb-2">
                Item Deleted
              </h2>
              <p className="text-[#74777B] text-[14px] leading-[18.9px]">
                `Item name` has been deleted successfully
              </p>
            </div>
          </div>
        </SuccessfulDelete>
      </div>
    </div>
  );
};

export default InstructorPage;
