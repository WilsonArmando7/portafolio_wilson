"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carrusel = () => {
    return (
        <div className="container mx-auto py-8">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-lg shadow-xl"
            >
                <SwiperSlide>
                    <img src="/images/foto21.jpg" alt="Imagen 1" className="w-full h-[400px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/foto22.jpg" alt="Imagen 2" className="w-full h-[400px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/foto23.jpg" alt="Imagen 3" className="w-full h-[400px] object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carrusel;
