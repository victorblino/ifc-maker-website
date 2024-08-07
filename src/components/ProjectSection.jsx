import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa o CSS do Swiper

const ProjectSection = ({ title, description, imgSrc, imgAlt, index, images }) => {
  // Alternar cor de fundo com base no índice
  const bgColor = index % 2 === 0 ? 'bg-white text-[#1d3247]' : 'bg-[#1d3247] text-[#04a4b4]';
  const textAlignment = index % 2 === 0 ? 'md:text-left' : 'md:text-right';

  return (
    <section className={`${bgColor} flex flex-col md:flex-row items-center justify-center p-8 min-h-screen`}>
      <div className="flex justify-center items-center mb-8 md:mb-0 w-full md:w-1/2">
        <Image 
          src={imgSrc} 
          alt={imgAlt} 
          width={650} 
          height={650} 
          className="rounded-lg"
        />
      </div>
      <div className={`flex flex-col justify-center items-center text-center w-full md:w-1/2 md:items-start ${textAlignment}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-4">
          {description}
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSection;
