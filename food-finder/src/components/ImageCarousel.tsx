"use client"

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"

export default function ImageCarousel() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (
    time: number,
    progress: number,
    progressCircle: React.RefObject<HTMLDivElement>,
    progressContent: React.RefObject<HTMLDivElement>
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      )
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  return (
    <div className="opacity-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[32rem]"
      >
        <SwiperSlide>
          <Image
            src={"/images/blackTruffles.png"}
            alt=""
            fill
            className="h-fit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/WagyuSteak.png"}
            alt=""
            fill
            className="h-fit"
          />
        </SwiperSlide>

        <div className="opacity-0" slot="container-end">
          <svg viewBox="0 0 0 0 " ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}
