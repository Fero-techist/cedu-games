import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Frame from "../assets/hero.png";
import Frames from "../assets/Frame92.png";
import OurClients from "../components/our-clients/OurClients";
import Img from "../assets/Frame427319160.png";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const card = [
    {
      id: 1,
      img: require("../assets/Group1.png"),
      text: "Request Demo",
      desc: "Request for a demo to know how CeHR works",
      width: "144px",
      height: "auto",
    },
    {
      id: 2,
      img: require("../assets/Group2.png"),
      text: "Select Plans",
      desc: "Request for a demo to know how CeHR works",
      width: "144px",
      height: "auto",
    },
    {
      id: 3,
      img: require("../assets/Group3.png"),
      text: "Create Account",
      desc: "You have to create an account here after getting to know how HRMS works",
      width: "200px",
      height: "auto",
      widths: "150px",
      heights: "100px",
    },
    {
      id: 4,
      img: require("../assets/Group4.png"),
      text: "Login to your HR Tools",
      desc: "Apply or save and start your work",
      width: "200px",
      height: "auto",
      widths: "150px",
      heights: "104.13px",
    },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className=" bg-no-repeat lg:z-0 md:z-10 z-20 relative  bg-cover  lg:flex md:grid grid justify-center lg:pl-24 lg:pr-0 md:px-10 px-8 py-10"
        style={{
          backgroundImage: `url(${Frame})`,
        }}
      >
        <div className=" lg:w-1/2 md:w-full w-full space-y-5 pt-10">
          <div>
            <p className=" lg:w-[559px] lg:leading-tight md:leading-tight leading-normal font-Kumbh lg:text-[48px] md:text-[48px] text-[28px] text-[#fff] font-bold">
              HR Insight: Enhancing Decision-Making with HR Management Tools
            </p>
            <div className=" flex justify-end lg:pr-32 md:pr-32 pr-10">
              <img
                className=" w-72 h-6"
                src={require("../assets/Elementw.png")}
                alt=""
              />
            </div>
          </div>

          <p className="  lg:w-[311px] md:w-[311px] w-full text-white font-Nunito text-base">
            Intelligent Solutions for Human Resource Management - Connecting
            Your People, Processes, and Performance.{" "}
          </p>
          <div className="pt-10 ">
            <button className=" w-48 h-14 text-[#000] rounded-xl text-base bg-white font-Nunito font-bold">
              Book a demo
            </button>
          </div>
        </div>
        <div className="  lg:w-1/2 md:w-full w-full lg:pt-0 md:pt-0 pt-10">
          <img className=" " src={require("../assets/Heroimg.png")} alt="" />
        </div>
      </div>

      <div className=" py-10 ">
        <div className=" grid justify-center items-center">
          <p className=" font-Kumbh font-bold lg:text-[40px] md:text-[40px] text-[36px]">
            Trusted by
          </p>
        </div>
        <div className=" ">
          <OurClients />
        </div>
      </div>

      <div
        className=" bg-no-repeat bg-cover lg:px-24 md:px-10 px-8 py-10"
        style={{
          backgroundImage: `url(${Frames})`,
        }}
      >
        <p className=" font-Kumbh font-bold lg:text-[40px] md:text-[40px] text-[36px]">
          How It Works
        </p>
        <div className=" flex flex-wrap lg:justify-between md:justify-between justify-center gap-10">
          {card.map((i) => (
            <div
              style={{ width: i.width, height: i.height }}
              key={i.id}
              className=" space-y-4"
            >
              <div className=" flex justify-center items-center">
                <img
                  style={{ width: i.widths, height: i.heights }}
                  className="  w-24 h-24"
                  src={i.img}
                  alt=""
                />
              </div>
              <p className=" text-base font-Kumbh text-[#000] text-center font-bold">
                {i.text}
              </p>
              <p className=" text-center text-[#9D9D9D] font-Nunito text-sm">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className=" pt-16 lg:px-24 md:px-10 px-8">
        <div className=" grid justify-center items-center gap-3">
          <p className=" text-center font-bold lg:text-4xl md:text-4xl text-3xl font-Kumbh">
            One Platform, Multiple Services
          </p>
          <p className=" font-Kumbh text-center lg:text-2xl md:text-2xl text-xl w-[787px]">
            Simplifying Human Resource Management, Your One-Stop Shop for HR
            Management
          </p>
        </div>

        <div className=" flex justify-center mt-8">
          {/*  */}
          <div className=" w-3/4">
            <img src={require("../assets/Group7.png")} alt="" />

            <div className=" flex justify-between">
              {/*  */}
              <div className=" w-60 space-y-5">
                <div className=" grid justify-center items-center ">
                  <img
                    className=" w-36 h-36"
                    src={require("../assets/job3.png")}
                    alt=""
                  />
                </div>
                <p className=" text-center Satoshi text-base text-[#333] font-bold">
                  Employee Management
                </p>
                <p className=" text-center font-Nunito text-sm text-[#4F4F4F]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
              {/*  */}
              <div className=" w-72 space-y-5 mt-36">
                <div className=" grid justify-center items-center ">
                  <img
                    className=" w-36 h-36"
                    src={require("../assets/job4.png")}
                    alt=""
                  />
                </div>
                <p className=" text-center Satoshi text-base text-[#333] font-bold">
                  Task Management & Time Tracking
                </p>
                <div className=" flex justify-center ">
                  <p className=" text-center font-Nunito text-sm text-[#4F4F4F]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className=" w-72 space-y-5 mt-28">
                <div className=" grid justify-center items-center ">
                  <img
                    className=" w-36 h-36"
                    src={require("../assets/job5.png")}
                    alt=""
                  />
                </div>
                <p className=" text-center Satoshi text-base text-[#333] font-bold">
                  Attendance management
                </p>
                <div className=" flex justify-center ">
                  <p className=" text-center font-Nunito text-sm text-[#4F4F4F]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/3 grid justify-center ">
            <div className=" w-60 space-y-5">
              <div className=" grid justify-center items-center ">
                <img
                  className=" w-36 h-36"
                  src={require("../assets/job1.png")}
                  alt=""
                />
              </div>
              <p className=" text-center Satoshi text-base text-[#333] font-bold">
                Recruitment & Jobs
              </p>
              <p className=" text-center font-Nunito text-sm text-[#4F4F4F]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className=" w-60 space-y-5 lg:relative lg:top-[-100px]">
              <div className=" grid justify-center items-center ">
                <img
                  className=" w-36 h-36"
                  src={require("../assets/job2.png")}
                  alt=""
                />
              </div>
              <p className=" text-center Satoshi text-base text-[#333] font-bold">
                Payroll management
              </p>
              <p className=" text-center font-Nunito text-sm text-[#4F4F4F]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" grid justify-center items-center">
          <button className=" border border-[#5608D4] w-64 h-16 mt-10 rounded-full text-[See more features] font-Nunito text-base">
            See more features
          </button>
        </div>
      </div>

      {/* Testimonial */}
      <div
        style={{
          backgroundImage: `url(${Img})`,
        }}
        className=" flex justify-center pt-16 "
      >
        <div className="lg:px-24 md:px-10 px-8">
          {" "}
          <div className=" w-2/5">
            <div>
              <p className=" lg:text-4xl md:text-4xl text-3xl font-bold Satoshi">
                What They Say?
              </p>
              <div className=" flex justify-end pr-10">
                <img
                  className=" w-[257.97px] h-[47.67px]"
                  src={require("../assets/Group22.png")}
                  alt=""
                />
              </div>
              <p>
                From onboarding to performance management, our HRMS covers it
                all. It's a comprehensive solution that meets all our HR needs.
                Here what our clients have to say.
              </p>
            </div>
          </div>
          <div className=" w-3/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
