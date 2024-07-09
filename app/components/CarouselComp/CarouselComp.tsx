"use client";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
// import "swiper/css/pagination";

import UserCard from "../UserCard/UserCard";

const usersData = [
  {
    userSrc: "/assets/user-cover-1.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-2.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-3.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-4.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-1.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-2.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-3.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
  {
    userSrc: "/assets/user-cover-4.png",
    name: "Julian Jameson",
    profession: "Profession",
  },
];

const CarouselComp = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      centeredSlides={false}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: true,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: false,
        },
      }}
    >
      {usersData.map((userData, index) => (
        <SwiperSlide key={index}>
          <UserCard
            userSrc={userData.userSrc}
            name={userData.name}
            profession={userData.profession}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComp;
