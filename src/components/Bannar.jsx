import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// https://i.ibb.co/fVwsTT9h/slid-1.jpg
// https://i.ibb.co/tTBkFV13/slid-2.jpg
// https://i.ibb.co/F44NtFLf/slid-3.jpg
// https://i.ibb.co/TMmRd0h5/slid-4.webp
// https://i.ibb.co/999NH4Ms/slid-5.jpg
// https://i.ibb.co/Dfgwpsyb/slid-6.jpg

const Bannar = () => {
  const slides = [
    {
      image: 'https://i.ibb.co/tTBkFV13/slid-2.jpg',
      title: 'Explore the Beauty of Water',
      description: 'Dive into serenity and feel the nature around you.',
    },
    {
      image:  "https://i.ibb.co/fVwsTT9h/slid-1.jpg" ,
      title: 'Walk Through The Forest',
      description: 'Find peace and adventure in every step.',
    },
    {
      image: 'https://i.ibb.co/F44NtFLf/slid-3.jpg',
      title: 'Climb the Highest Mountains',
      description: 'Experience heights like never before.',
    },
    {
      image: 'https://i.ibb.co/TMmRd0h5/slid-4.webp',
      title: 'Relax at the Sunny Beaches',
      description: 'Let the waves wash away your worries.',
    },
    {
      image: 'https://i.ibb.co/999NH4Ms/slid-5.jpg',
      title: 'Reach for the Sky',
      description: 'Dream big, aim higher.',
    },
    {
      image: 'https://i.ibb.co/Dfgwpsyb/slid-6.jpg',
      title: 'Witness the Golden Hour',
      description: 'Enjoy nature’s perfect goodbye.',
    },
  ];

  return (
    <div className="max-w-full mx-auto mt-5 rounded overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-[300px] md:h-[700px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bannar;
