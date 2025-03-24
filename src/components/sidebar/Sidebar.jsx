import React, { useState } from "react";
import { FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import celmalogo from "../../assets/Ellipse 36.png";
import {
  FaUserGraduate,
  FaBook,
  FaChartLine,
  FaSchool,
  FaTrophy,
  FaUser,
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Dashboard", icon: <FaUserGraduate /> },
    { to: "/institution", label: "institution", icon: <FaUserGraduate /> },
    { to: "/instructor", label: "instructor", icon: <FaBook /> },
    { to: "/student", label: "Students", icon: <FaChartLine /> },
    { to: "/guardian", label: "Guardians", icon: <FaSchool /> },
    { to: "/notifications", label: "Notifications", icon: <FaTrophy /> },
  ];

  return (
    <div className="Satoshi">
      <button
        className="absolute top-6 left-2 md:hidden text-md text-[#202020]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>
      <div className="nav">
        <div
          className={`fixed w-52 z-10 h-full bg-[#FFFFFF] shadow-lg flex flex-col justify-between transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full w-0"
          } md:translate-x-0 p-5`}
        >
          <button
            className="md:hidden relative font-DM_SANS right-20 block font-bold text-2xl text-[#202020]"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
          <div className="lg:mt-10 md:mt-8 mt-6">
            <Link to="/home">
              <div className=" flex gap-4 items-center">
                <img
                  className="w-10"
                  src={celmalogo}
                  alt="Logo"
                />

                <p className="text-[24px] font-[700] leading-[30px]"> CELMA</p>
              </div>
            </Link>
          </div>

          {/* <nav className="mt-14 Satoshi flex flex-col gap-6">
            <Link
              to="/Dashboard"
              className="flex items-center gap-2 p-2 rounded-full hover:bg-white"
            >
              <span className="text-[#2F1893] text-sm font-bold">
                Dashboard
              </span>
            </Link>

            <Link
              to="/PagesOverview"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-white"
            >
              <span className="text-[#202020] font-[400] text-[16px]">
                Institution
              </span>
            </Link>

            <Link
              to="/Students"
              className="flex items-center gap-2 p-2 rounded-full hover:bg-white"
            >
              <span className="text-[#202020] font-[400] text-[16px]">
                Instructors
              </span>
            </Link>
          </nav> */}

          <nav className="mt-12 Satoshi">
            <p>Overview</p>

            {links.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                className={`block relative text-sm py-2 rounded text-[18.97px] hover:bg-[#F8F8F8] mb-2 ${
                  location.pathname === to
                    ? "bg-purple-200 text-purple-600 active-link"
                    : "text-[#202020] hover:text-[#6a0dad]"
                }`}
              >
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg transform scale-0 transition-transform duration-300 origin-left">
                  {location.pathname === to && (
                    <span className="block h-full w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                  )}
                </span>
                <span className="inline-flex items-center">
                  {icon}
                  <span className="ml-3">{label}</span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto hover:bg-white grid rounded-full gap-6">
            <Link
              to="/ProfileForm"
              className="flex items-center text-[#202020]"
            >
              <FaCog className="mr-2" /> Settings
            </Link>

            <Link
              to="/LoginForm"
              className="flex hover:bg-white rounded-full items-center text-red-500"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
        <div className="md:ml-52 px-6">{children}</div>
      </div>
      {/* Sidebar */}
    </div>
  );
};

export default Sidebar;
