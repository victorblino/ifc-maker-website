import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa';

const TeamSection = ({ people }) => {
  return (
    <section className="bg-gray-100 p-12">
      <h3 className="text-2xl font-bold mb-8 text-center">Equipe do Projeto</h3>
      {people && people.professor && (
        <div className="text-center mb-12">
          <h4 className="text-xl font-bold mb-2">{people.professor.name}</h4>
          <Image
            src={people.professor.photo}
            alt={people.professor.name}
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
          <div className="flex justify-center space-x-4 mt-4">
            {people.professor.email && (
              <a href={`mailto:${people.professor.email}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-2xl text-blue-700" />
              </a>
            )}
            {people.professor.github && (
              <a href={`https://github.com/${people.professor.github}`} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700" />
              </a>
            )}
            {people.professor.linkedin && (
              <a href={`https://linkedin.com/in/${people.professor.linkedin}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700" />
              </a>
            )}
            {people.professor.instagram && (
              <a href={`https://instagram.com/${people.professor.instagram}`} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-600" />
              </a>
            )}
            {people.professor.facebook && (
              <a href={`https://facebook.com/${people.professor.facebook}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-blue-700" />
              </a>
            )}
            {people.professor.twitter && (
              <a href={`https://twitter.com/${people.professor.twitter}`} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400" />
              </a>
            )}
            {people.professor.discord && (
              <a href={`https://discord.com/users/${people.professor.discord}`} target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-2xl text-purple-700" />
              </a>
            )}
          </div>
        </div>
      )}
      {people && people.students && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.students.map((student, idx) => (
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
                {student.email && (
                  <a href={`mailto:${student.email}`} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-2xl text-blue-700" />
                  </a>
                )}
                {student.github && (
                  <a href={`https://github.com/${student.github}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-gray-700" />
                  </a>
                )}
                {student.linkedin && (
                  <a href={`https://linkedin.com/in/${student.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-blue-700" />
                  </a>
                )}
                {student.instagram && (
                  <a href={`https://instagram.com/${student.instagram}`} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-pink-600" />
                  </a>
                )}
                {student.facebook && (
                  <a href={`https://facebook.com/${student.facebook}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-blue-700" />
                  </a>
                )}
                {student.twitter && (
                  <a href={`https://twitter.com/${student.twitter}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl text-blue-400" />
                  </a>
                )}
                {student.discord && (
                  <a href={`https://discord.com/users/${student.discord}`} target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="text-2xl text-purple-700" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TeamSection;
