import React from "react";

const OurClients = () => {
  const clients = [
    {
      id: 1,
      img: require("../../assets/google.png"),
      width: "156.08px",
      height: "54.7px",
    },
    {
      id: 2,
      img: require("../../assets/netflix-3 1.png"),
      width: "140.35px",
      height: "40.71px",
    },
    {
      id: 3,
      img: require("../../assets/airbnb.png"),
      width: "149.61px",
      height: "49.93px",
    },

    {
      id: 4,
      img: require("../../assets/amazon-2.png"),
      width: "142.48px",
      height: "46.09px",
    },
    {
      id: 5,
      img: require("../../assets/facebook.png"),
      width: "179.33px",
      height: "38.41px",
    },
    {
      id: 6,
      img: require("../../assets/grab-logo.png"),
      width: "120.96px",
      height: "50.49px",
    },
  ];
  return (
    <div className="marquee-container">
      {/* <div className="marquee h-full py-5 relative flex pt-10 w-full">
        {clients.map((items) => (
          <div key={items.id} className="marquee-item ">
            <img
              className=" lg:w-[182.17px] md:w-[182.17px] w-auto lg:h-[75.25px] md:h-[75.25px] h-auto "
              src={items.img}
              alt=""
            />
          </div>
        ))}
      </div> */}
      <div className="marquee flex py-5 gap-10">
        {clients.map((item) => (
          <img
            key={item.id}
            className="marquee-item"
            style={{ width: item.width, height: item.height }}
            src={item.img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
