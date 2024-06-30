import React from "react";
import lego from "../../assets/website/hero_advent.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" dark:text-white duration-300 bg-[url('assets/website/hero_advent.jpg')] bg-cover ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="flex items-center justify-center">
          {/* Image section */}
          {/* <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div> */}

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 flex flex-col items-center justify-center ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Welcome to{" "}
              <span className="text-primary">Church Dashboard</span>
            </h1>
            <p className=" text-xl capitalize text-white" data-aos="fade-up" data-aos-delay="300">
              Rwanda Union Mission is part of the East-Central Africa Division. In 2019, the membership
              was 972,966 in eight local fields: the East Central Rwanda Conference, the North Rwanda
              Conference, the North-West Rwanda Field, the West Rwanda Field, the Central Rwanda Field,
              the South Rwanda Field, North-East Rwanda Field
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"

            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
