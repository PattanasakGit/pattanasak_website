import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from 'next/image'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import React from "react";
import { useShowImageModalState } from "@/store/ShowImageModalStage";

interface Props { 
  slides: string[];
}

function Carousel({ slides }: Props) {
  const { setIsOpenModal ,setImageUrl, setInitialIndex } = useShowImageModalState();
  return (
    <div className="Carousel-Cover">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        pagination={{
          clickable: true,
        }}
        speed={300}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <Image
              src={slide}
              alt="My Image"
              width={450}
              height={300}
              className="SwiperSlide-img"
              onClick={() => {
                setInitialIndex(index);
                setImageUrl(slides);
                setIsOpenModal(true);
              }}
            />
          </SwiperSlide>
        ))}

        <div className="CarouselStyle_BTN">
          <button name='Carousel-prev' className="button-prev ">{'<-'}</button>
          <button name='Carousel-next' className="button-next ">{'->'}</button>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;