import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa';

const ProjectSection = ({ id, title, description, imgSrc, imgAlt, index, images, people }) => {
  const bgColor = index % 2 === 0 ? 'bg-white text-[#1d3247]' : 'bg-[#ffffff] text-black';

  const renderSocialLinks = (social) => (
    <div className="flex justify-center space-x-4 mt-4">
      {social.email && (
        <a href={`mailto:${social.email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl text-blue-700" />
        </a>
      )}
      {social.github && (
        <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-gray-700" />
        </a>
      )}
      {social.linkedin && (
        <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-blue-700" />
        </a>
      )}
      {social.instagram && (
        <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-pink-600" />
        </a>
      )}
      {social.facebook && (
        <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl text-blue-700" />
        </a>
      )}
      {social.twitter && (
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl text-blue-400" />
        </a>
      )}
      {social.discord && (
        <a href={`https://discord.com/users/${social.discord}`} target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-2xl text-purple-700" />
        </a>
      )}
    </div>
  );

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
            {people.professor.social && renderSocialLinks(people.professor.social)}
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
                {student.social && renderSocialLinks(student.social)}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
