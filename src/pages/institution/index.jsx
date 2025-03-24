import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import caristasImg from "../../assets/Mask group (6).png";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import { Btn, RoundedBtn } from "../../components/button.jsx/Btn";
import { Modal, InviteModal, SuccessModal } from "../../components/modal";

export default function StudentsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Lessons");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const navigate = useNavigate(); // Use navigate for navigation

  const students = [
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      username: "21st June, 2024",
      email: "emailaddress@gmail.com",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
    {
      image: caristasImg,
      name: "Caritas Rising Academy",
      email: "emailaddress@gmail.com",
      username: "21st June, 2024",
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const viewInstitution = () => {
    navigate("/institution/institutionPage");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-10 w-10/12">
          <h1 className="text-[#400167] font-bold text-20">All Institution</h1>
        </div>
        <Btn onClick={openModal}>+ New Invite</Btn>

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
        students={filteredStudents}
        onViewInstitution={viewInstitution}
      />

      {/* Render modals conditionally */}
      {/* <LessonsModal
        isOpen={modalType === "Lessons"}
        onClose={closeModal}
      />
      <ExamsModal
        isOpen={modalType === "Exams"}
        onClose={closeModal}
      />
      <ClassroomsModal
        isOpen={modalType === "Classrooms"}
        onClose={closeModal}
      /> */}
    </div>
  );
}

function ShowingCategoryOfStudent({ filter, changeFilter }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-semibold text-[#000000] text-[20px]">Showing:</span>
      <div className="relative">
        <select
          value={filter}
          onChange={changeFilter}
          className="text-[#400167] border bg-[#F4F4F4] rounded-lg py-3 px-4 w-[248px] font-bold"
        >
          <option value="Lessons">Lessons</option>
          <option value="Exams">Exams</option>
          <option value="Classrooms">Classrooms</option>
        </select>
      </div>
    </div>
  );
}

function Table({ students, onViewInstitution }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className=" uppercase font-[600] text-[8px] font-Nunito">
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Institution Name
          </th>
          <th className="py-2 px-4 text-left text-[#3F3F3F] text-[16px] font-light">
            Date created
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
        {students.map((student, index) => (
          <Student
            key={index}
            student={student}
            onViewInstitution={onViewInstitution}
          />
        ))}
      </tbody>
    </table>
  );
}

function Student({ student, onViewInstitution }) {
  return (
    <tr>
      <div className=" flex items-center">
        <img
          className=" w-6 h-6"
          src={student.image}
          alt="caristaImg"
        />
        <td className="py-2 font-semibold px-4 text-[14px]">{student.name}</td>
      </div>
      <td className="py-2 px-4 text-[14px]">{student.username}</td>
      <td className="py-2 px-4 text-[14px]">{student.email}</td>
      <td className="py-2 px-4 text-[14px]">
        <button
          onClick={onViewInstitution}
          className="bg-[#DDD3FF] text-[#5002D0] py-2 px-4 rounded-lg hover:bg-purple-200 text-[14px]"
        >
          Show details
        </button>
      </td>
    </tr>
  );
}
