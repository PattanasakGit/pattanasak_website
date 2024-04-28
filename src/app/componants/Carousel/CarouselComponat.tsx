import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

interface Props { 
  slides: string[];
}

function Carousel({ slides }: Props) {
  return (
    <div className="Carousel-Cover">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        // modules={[EffectCoverflow, Navigation]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <img src={slide} alt="" className="SwiperSlide-img"/>
          </SwiperSlide>
        ))}
        <div className="CarouselStyle_BTN">
          <button className="button-prev ">{'<-'}</button>
          <button className="button-next ">{'->'}</button>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;