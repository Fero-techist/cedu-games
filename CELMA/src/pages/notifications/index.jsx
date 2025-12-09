import React, { useState } from "react";
import Search from "../../components/Search";
import { Btn } from "../../components/button.jsx/Btn";
// import { SuccessModal } from "../../components/modal";
import NewNotification from "../../components/Notification/NewNotification";
import NotificationList from "../../components/Notification/NotificationList";

const initialNotifications = [
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  {
    title: "Tom Browns",
    body: "Lorem ipsum dolor sit amet...",
    date: "24 May, 2024",
  },
  // Add more initial notifications if needed
];

export default function Notification() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addNotification = (newNotification) => {
    setNotifications([...notifications, newNotification]);
    setIsModalOpen(false);
  };

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md m-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-x-14 w-10/12">
          <h1 className="text-[#400167] font-bold text-20">Notifications</h1>
          {/* <Search onSearch={handleSearch} /> */}
        </div>
        <div className="mr-20">
          <Btn onClick={openModal}>+New notification</Btn>
        </div>
      </div>
      <NotificationList notifications={filteredNotifications} />
      <NewNotification
        isOpen={isModalOpen}
        onClose={closeModal}
        addNotification={addNotification}
      />
    </div>
  );
}
