import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const ProjectSection = ({ title, description, imgSrc, imgAlt, index, images, people }) => {
  const bgColor = index % 2 === 0 ? 'bg-white text-[#1d3247]' : 'bg-[#020f1f] text-[#ffffff]';

  return (
    <section className={`${bgColor} flex flex-col items-center justify-center p-12 min-h-screen`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
        <div className="flex justify-center items-center mb-8 md:mb-0 w-full md:w-1/2">
          <Image 
            src={imgSrc} 
            alt={imgAlt} 
            width={650} 
            height={650} 
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 md:items-start md:text-left">
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
          {images.map((image, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full my-8 border-b-4 border-gray-600 pt-24"></div>
      {people && people.professor && (
        <div className="w-full mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Equipe do Projeto</h3>
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-2">{people.professor.name}</h4>
            <Image
              src={people.professor.photo}
              alt={people.professor.name}
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <div className="flex justify-center space-x-4 mt-4">
              {people.professor.social.linkedin && (
                <a href={people.professor.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-blue-700" />
                </a>
              )}
              {people.professor.social.twitter && (
                <a href={people.professor.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl text-blue-400" />
                </a>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {people.students && people.students.map((student, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-xl font-bold mb-2">{student.name}</h4>
                <Image
                  src={student.photo}
                  alt={student.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
                <div className="flex justify-center space-x-4 mt-4">
                  {student.social.linkedin && (
                    <a href={student.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl text-blue-700" />
                    </a>
                  )}
                  {student.social.twitter && (
                    <a href={student.social.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-2xl text-blue-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
