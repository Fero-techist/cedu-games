import React, { useState } from "react";
import { Btn, RoundedBtn } from "../../components/button.jsx/Btn";
import { Modal, InviteModal, SuccessModal } from "../../components/modal";
import caristasImage from "../../assets/Ellipse 38 (1).png";
import courseImg from "../../assets/Leadership.png";
import { CourseCard } from "../../components/card";

const InstructorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
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

  // Open Invite Modal
  const openInviteModal = () => {
    setIsModalOpen(false);
    setIsInviteModalOpen(true);
  };

  const closeInviteModal = () => setIsInviteModalOpen(false);

  // Success Modal
  const handleInviteSubmit = (ev) => {
    ev.preventDefault();
    setIsInviteModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  // const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const closeSuccessModal = () => setIsSuccessModalOpen(false);
  return (
    <div>
      <div className="p-6 m-3">
        <h1 className="font-[700] font-satoshi text-[#400167] text-[20px] leading-[30px] mb-6 ">
          {user.name} Details
        </h1>
        <div className=" mb-6 bg-[#DDD3FF] p-4 rounded-md w-full h-[156px]">
          {/* Add Parent Button */}
          <div className="float-right">
            <Btn onClick={openInviteModal}>Add parent</Btn>
          </div>

          {/* Invite Modal */}
          <InviteModal
            isOpen={isInviteModalOpen}
            onClose={closeInviteModal}
          >
            <div className="my-10">
              <div className="text-center">
                <h1 className="text-[#000000] text-[20px]  font-satoshi leading-[27px] font-[900] mb-2">
                  Invite User to CELMA
                </h1>
                <p className="font-[500] text-[14px] text-[#0B2239] leading-[18.9px] font-satoshi">
                  Login details will be sent to user
                </p>
              </div>
              <form
                className="my-12"
                onSubmit={handleInviteSubmit}
              >
                <label
                  htmlFor="invite-email"
                  className="block mb-2 font-[500] text-[14px] text-[#0B2239] leading-[18.9px] font-satosh"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="invite-email"
                  value={inviteEmail}
                  onChange={(ev) => setInviteEmail(ev.target.value)}
                  className="w-full p-2  rounded-lg focus:outline-none border-0 bg-[#F3F5F5] py-[16px]"
                />
                <div className="mt-4 flex justify-center">
                  <RoundedBtn
                    type="submit"
                    className="font-[700] font-satoshi  leading-[21.6px] w-full rounded-full text-white py-[16px] bg-[#5002D0]  h-[60px] mt-10 text-[16px] "
                  >
                    <span>Invite User</span>
                  </RoundedBtn>
                </div>
              </form>
            </div>
          </InviteModal>

          {/* Success Modal */}
          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={closeSuccessModal}
          />

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
                <div>
                  <button className="bg-[#f7ada880]  text-[#e33f33] py-[10px] px-[18px] rounded-[10px] font-[500] text-[16px] leading-[20px] mr-2 self-end">
                    Delete User
                  </button>
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
          Institution Overview
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
          <header className="flex justify-between items-center py-4"></header>
          <div className="grid grid-cols-4 gap-2 px-4">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
              />
            ))}
          </div>

          <button className="bg-[#f7ada880]  text-[#e33f33] py-[10px] px-[18px] rounded-[10px] font-[500] text-[16px] leading-[20px] mr-2 self-end">
            Delete User
          </button>
        </div>

        {/*  */}
        {/* <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">All Lessons</h3>
          <div className="bg-white p-4 border border-[rgba(1, 52, 103, 0.3)] rounded-lg h-[394px]">
            <table className="min-w-full">
              <thead className="my-4">
                <tr>
                  <th className="text-left text-[16px] leading-[20px] p-2 font-satoshi font-semibold">
                    Subject
                  </th>
                  <th className="text-left text-[16px] leading-[20px] p-2 font-satoshi font-semibold">
                    Progress
                  </th>
                  <th className="text-left text-[16px] leading-[20px] p-2 font-satoshi font-semibold">
                    Total Topics
                  </th>
                  <th className="text-left text-[16px] leading-[20px] p-2 font-satoshi font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="mt-8">
                {user.lessons.map((lesson, index) => (
                  <tr
                    key={index}
                    className="bg-white"
                  >
                    <td className="p-2">
                      <div className="mb-4 font-regular font-satoshi">
                        {lesson.subject}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="mb-4 font-regular font-satoshi">
                        {lesson.progress}%
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="mb-4 font-regular font-satoshi">
                        {lesson.totalTopics}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="mb-4 font-regular font-satoshi">
                        <span
                          className={`${
                            lesson.status === "In Progress"
                              ? "text-orange-500"
                              : lesson.status === "Completed"
                              ? "text-green-500"
                              : "text-blue-500"
                          }`}
                        >
                          {lesson.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InstructorPage;
