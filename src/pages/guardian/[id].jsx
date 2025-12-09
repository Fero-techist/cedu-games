import React, { useState } from "react";
import { RedBtn, RoundedBtn } from "../../components/button.jsx/Btn";
import {
  Modal,
  InviteModal,
  SuccessfulDelete,
  DeleteItem,
} from "../../components/modal";
import guardianImg from "../../assets/guardiantwo.png";
import courseImg from "../../assets/Leadership.png";
import { CourseCard } from "../../components/card";

const Guardianpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] =
    useState(false);

  const [inviteEmail, setInviteEmail] = useState("");
  const user = {
    name: "Hannah B.Joseph",
    email: "annjoseph@gmail.com",
    profilePicture: guardianImg, // Add the correct path to the profile picture
    Lessons: "O2",
    Students_lesson: "O5",
    Students: 10,
  };

  // Open Invite Modal
  const openInviteModal = () => {
    setIsModalOpen(false);
    setIsInviteModalOpen(true);
  };

  const handleDeleteguardian = () => {
    setOpenDeleteModal(true);
  };

  const cancelModal = () => setOpenDeleteModal(false);

  const confirmDelete = () => {
    setOpenDeleteModal(false);
    setOpenSuccessfulDeleteModal(true);
  };

  const closeInviteModal = () => setIsInviteModalOpen(false);

  // Success Modal
  const handleInviteSubmit = (ev) => {
    ev.preventDefault();
    setIsInviteModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const closeSuccessfulDeleteModal = () => {
    setOpenSuccessfulDeleteModal(false);
  };

  // const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const closeSuccessModal = () => setIsSuccessModalOpen(false);
  return (
    <div>
      <div className="p-6 m-3">
        <h1 className="font-[700] font-satoshi text-[#400167] text-[20px] leading-[30px] mb-6 ">
          All Guardian
        </h1>
        <div className=" mb-6 bg-[#DDD3FF] p-4 rounded-md w-full h-[156px]">
          {/* Add Parent Button */}
          <div className="float-right">
            <RedBtn onClick={handleDeleteguardian}>Delete guardian</RedBtn>
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

          {/* Success Modal */}
          <SuccessfulDelete
            isOpen={openSuccessfulDeleteModal}
            onClose={closeSuccessfulDeleteModal}
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
          Guardian Overview
        </h3>

        {/* User Stats */}
        <div className="flex items-center gap-10 mb-6">
          <div
            className="bg-white p-4 roun  ded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid rgba(4, 167, 167, 0.5)" }}
          >
            <p className="text-center text-[32px] font-[500]">{user.Lessons}</p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Students
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid #F182D980" }}
          >
            <p className="text-center text-[32px] font-[500]">
              {user.Students_lesson}
            </p>
            <p className="text-center text-gray-500 text-[12px] font-[500] mt-3">
              Student Lessons
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-lg shadow-lg w-[181px] flex items-center gap-3 font-satoshi"
            style={{ border: "1px solid #0269D080" }}
          >
            <p className="text-center text-[32px] font-[500]">
              {user.Students}
            </p>
            <p className="text-center text-gray-500 text-[14px] font-[500] mt-3">
              Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guardianpage;
