import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import guardianImg from "../../assets/guardian.png";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import { Btn, RoundedBtn } from "../../components/button.jsx/Btn";
import { Modal, InviteModal, SuccessModal } from "../../components/modal";

export default function GuardianTable(params) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Guardian");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const navigate = useNavigate();

  const guardians = [
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: guardianImg,
      name: "Hannah  Joseph",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
  ];

  const filteredGuardians = guardians.filter((guardian) =>
    guardian.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const viewGuardian = () => {
    navigate("/guardian/guardianPage");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-10 w-10/12">
          <h1 className="text-[#400167] font-bold text-20">All Guardian</h1>
        </div>
        <Btn onClick={openModal}>+ New Guardian</Btn>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div className="my-10">
            <h1 className="text-[#400167] text-[20px] leading-[27px] font-[700] mb-2">
              Add New Student
            </h1>
            <p className="text-[14px] leading-[18.9px] text-[#74777B]">
              You can invite a new student or add existing student
            </p>
            <div className="mt-6">
              <Link onClick={openInviteModal}>
                <div className="text-[#000000] font-satoshi underline font-[400] mb-3">
                  Invite Student
                </div>
              </Link>
              <Link>
                <div className="text-[#000000] font-satoshi underline font-[400] mb-3">
                  Add Existing Student
                </div>
              </Link>
            </div>
          </div>
        </Modal>
      </div>

      <Table
        guardians={filteredGuardians}
        onviewGuardian={viewGuardian}
      />
    </div>
  );
}

function Table({ guardians, onviewGuardian }) {
  return (
    <table className="w-full mx-auto bg-white">
      <thead>
        <tr className=" uppercase font-[600] text-[8px] font-Nunito">
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Student Name
          </th>
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Phone Number
          </th>
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Email Address
          </th>
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {guardians.map((guardian, index) => (
          <Guardian
            key={index}
            guardian={guardian}
            onviewGuardian={onviewGuardian}
          />
        ))}
      </tbody>
    </table>
  );
}

function Guardian({ guardian, onviewGuardian }) {
  return (
    <tr className=" w-full mx-auto">
      <div className=" flex items-center">
        <img
          className=" w-6 h-6"
          src={guardian.image}
          alt="caristaImg"
        />
        <td className="py-2 font-semibold px-4 text-[14px]">{guardian.name}</td>
      </div>
      <td className="py-2 px-4 text-[14px]">{guardian.phoneNumber}</td>
      <td className="py-2 px-4 text-[14px]">{guardian.email}</td>
      <td className="py-2 px-4 text-[14px]">
        <button
          onClick={onviewGuardian}
          className="bg-[#DDD3FF] text-[#5002D0] py-2 px-4 rounded-lg hover:bg-purple-200 text-[14px]"
        >
          Show details
        </button>
      </td>
    </tr>
  );
}
