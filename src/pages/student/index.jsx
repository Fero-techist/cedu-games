import { useState } from "react";
import { Link } from "react-router-dom";
// import { MdSearch } from "react-icons/md";
import { Btn, RoundedBtn } from "../../components/button.jsx/Btn";
import { Table } from "../../components/Tables";
import userImg from "../../assets/prashant (502) 2.png";
import { Modal, InviteModal, SuccessModal } from "../../components/modal"; // Import both modals
import Search from "../../components/Search";

const userData = [
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "24 May, 2024",
    phoneNumber: "09067890725",
    email: "ellaalexis@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "23 May, 2024",
    phoneNumber: "09067890726",
    email: "johndoe@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "22 May, 2024",
    phoneNumber: "09067890727",
    email: "janesmith@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "21 May, 2024",
    phoneNumber: "09067890728",
    email: "chrisjohnson@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "20 May, 2024",
    phoneNumber: "09067890729",
    email: "patriciabrown@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "24 May, 2024",
    phoneNumber: "09067890725",
    email: "ellaalexis@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "23 May, 2024",
    phoneNumber: "09067890726",
    email: "johndoe@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    dateRegistered: "22 May, 2024",
    phoneNumber: "09067890727",
    email: "janesmith@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890728",
    email: "chrisjohnson@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890729",
    email: "patriciabrown@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890725",
    email: "ellaalexis@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890726",
    email: "johndoe@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890727",
    email: "janesmith@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Temitope OgoOluwa",
    phoneNumber: "09067890728",
    email: "chrisjohnson@gmail.com",
    action: "Show Details",
  },
  {
    image: userImg,
    name: "Patricia Brown",
    phoneNumber: "09067890729",
    email: "patriciabrown@gmail.com",
    action: "Show Details",
  },
];

const Students = () => {
  const [searchTerm, setSearchTerem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  function handleSearch(term) {
    setSearchTerem(term);
  }

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

  return (
    <>
      <div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-x-10 w-10/12">
              <h1 className="text-[#400167] font-bold text-20">All Students</h1>
              {/* <Search onSearch={handleSearch} /> */}
            </div>
            <Btn onClick={openModal}>+ New Student</Btn>
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

          {/* Student Data */}
          <div className="bg-white mt-6 ">
            <div className="p-3">
              <table className="w-full text-[#3F3F3F] font-Nunito text-sm mb-6 border-collapse">
                <thead>
                  <tr className="text-left">
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
    </>
  );
};

export default Students;
