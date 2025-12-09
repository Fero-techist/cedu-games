// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Search from "../../components/Search";
// import instructorImage from "../../assets/Mask group.png";

// export default function instructorTable() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("Lessons");

//   const instructor = [
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       username: "21st June, 2024",
//       email: "emailaddress@gmail.com",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//     {
//       image: instructorImage,
//       name: "Caritas Rising Academy",
//       email: "emailaddress@gmail.com",
//       username: "21st June, 2024",
//     },
//   ];

//   const viewInstructor = () => {
//     navigate("/instructor/instructorPage");
//   };

//   return (
//     <div>
//       <p>There......</p>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instructorImage from "../../assets/Mask group.png";
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
  const [inviteEmail, setInviteEmail] = useState("");

  const navigate = useNavigate(); // Use navigate for navigation

  // const instructor = [
  //   {
  //     image: instructorImage,
  //     name: "Janes Brown",
  //     phoneNumber: "+345 098 111 0000",
  //     email: "emailaddreess@gmail.com",
  //   },
  // ];

  const instructors = [
    {
      image: instructorImage,
      name: "James Brown",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
      email: "emailaddress@gmail.com",
    },
    {
      image: instructorImage,
      name: "James Brown",
      email: "emailaddress@gmail.com",
      phoneNumber: "+234 810 111 2222",
    },
  ];

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const viewInstructor = () => {
    navigate("/instructor/instructorPage");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-10 w-10/12">
          <h1 className="text-[#400167] font-bold text-20">All Instructors</h1>
        </div>
        <Btn onClick={openModal}>+ New Instructor</Btn>

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

        <div>
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
                    className="font-[700] font-satoshi text-[16px] leading-[21.6px]"
                  >
                    Invite User
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
        </div>
      </div>

      <Table
        instructors={filteredInstructors}
        onviewInstructor={viewInstructor}
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

function Table({ instructors, onviewInstructor }) {
  return (
    <table className="min-w-full bg-white">
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
        {instructors.map((instructor, index) => (
          <Instructor
            key={index}
            instructor={instructor}
            onViewInstructor={onviewInstructor}
          />
        ))}
      </tbody>

      {/* <tbody>
        {instructors.map((instructor, index)) => (
          <Instructor
            key={index}
            instructor={instructors}
            onViewInstructor={onviewInstructor} />
           
        )}

      </tbody> */}
    </table>
  );
}

function Instructor({ instructor, onViewInstructor }) {
  return (
    <tr>
      <div className=" flex items-center">
        <img
          className=" w-6 h-6"
          src={instructor.image}
          alt="caristaImg"
        />
        <td className="py-2 font-semibold px-4 text-[14px]">
          {instructor.name}
        </td>
      </div>
      <td className="py-2 px-4 text-[14px]">{instructor.phoneNumber}</td>
      <td className="py-2 px-4 text-[14px]">{instructor.email}</td>
      <td className="py-2 px-4 text-[14px]">
        <button
          onClick={onViewInstructor}
          className="bg-[#DDD3FF] text-[#5002D0] py-2 px-4 rounded-lg hover:bg-purple-200 text-[14px]"
        >
          Show details
        </button>
      </td>
    </tr>
  );
}
