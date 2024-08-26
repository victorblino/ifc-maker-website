import React from 'react';
import Image from 'next/image';

const ProjectSection = ({ id, title, description, imgSrc, imgAlt, index, images }) => {
  const bgColor = index % 2 === 0 ? 'bg-white text-[#1d3247]' : 'bg-[#ffffff] text-black';

  const renderMedia = (media) => {
    if (media.type === 'image') {
      return (
        <Image
          src={media.src}
          alt={media.alt}
          width={500}
          height={300}
          className="object-cover rounded-lg"
          onError={(e) => {
            console.error(`Error loading image: ${e.target.src}`);
          }}
        />
      );
    } else if (media.type === 'video') {
      return (
        <div className="video-container">
          <video
            controls
            width="100%"
            max-width="800px" 
            height="auto" 
            className="object-cover rounded-lg"
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  };

  return (
    <section id={id} className={`${bgColor} flex flex-col items-center justify-center p-12 min-h-screen`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
        <div className="flex justify-center items-center mb-8 md:mb-0 w-full md:w-1/2">
          <Image 
            src={imgSrc} 
            alt={imgAlt} 
            width={650} 
            height={650} 
            className="rounded-lg"
            onError={(e) => {
              console.error(`Error loading image: ${e.target.src}`);
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-4">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
          {images.map((media, idx) => (
            <div key={idx} className="flex justify-center items-center">
              {renderMedia(media)}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full my-8 border-b-4 border-gray-600 pt-24" aria-hidden="true"></div>
    </section>
  );
};

export default ProjectSection;