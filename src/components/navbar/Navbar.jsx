import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import navImg from "../../assets/Ellipse 37.png";

const Navbar = () => {
  const navigate = useNavigate();

  function handleNotification() {
    navigate("/notification");
  }

  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container flex items-center justify-between">
        <div className="flex sticky w-full z-10 my-4 top-0 justify-between items-center">
          <div className="flex px-4 border rounded-xl w-full border-[#CCCCCCCC] my-2 h-16 items-center">
            <MdSearch
              size={20}
              className="text-[#A7A7A7]"
            />
            <input
              type="text"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              placeholder="Search your course here..."
              className="w-full  text-sm p-2 focus:outline-none focus:border-purple text-[#A7A7A7]"
            />
          </div>
        </div>

        <div
          className="p-2 rounded-full cursor-pointer"
          onClick={handleNotification}
        >
          <img
            className=" w-14"
            src={navImg}
            alt="navImg"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
