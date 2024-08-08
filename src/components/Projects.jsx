import React from 'react';
import ProjectSection from './ProjectSection';  // Garanta que este caminho esteja correto
import peopleData from '../data/peopleData';

// Array de dados dos projetos
const projectsData = [
  {
    id: "mao-robotica",
    title: "Mão Robótica",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Mão Robótica",
    index: 0,
    images: [
      { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 3" }
    ]
  },
  {
    id: "lego-mindstorms",
    title: "Lego Mindstorms",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/lego/legoev3logo.png",
    imgAlt: "Lego Mindstorms",
    index: 1,
    images: [
      { src: "/imgs/lego/lego_snake.webp", alt: "Detalhe do Lego Mindstorms 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Lego Mindstorms 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Lego Mindstorms 3" }
    ],
    people: peopleData
  },
  {
    id: "casinha-bonecas",
    title: "Casinha de Bonecas",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Casinha de Bonecas",
    index: 2,
    images: [
      { src: "/imgs/placeholder.png", alt: "Detalhe da Casinha de Bonecas 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe da Casinha de Bonecas 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe da Casinha de Bonecas 3" }
    ],
    people: peopleData
  },
  {
    id: "reservatorio-agua",
    title: "Reservatório de Água",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Reservatório de Água",
    index: 3,
    images: [
      { src: "/imgs/placeholder.png", alt: "Detalhe do Reservatório de Água 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Reservatório de Água 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Reservatório de Água 3" }
    ],
    people: peopleData
  },
  {
    id: "carrinho-controle",
    title: "Carrinho de Controle Remoto",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Carrinho de Controle Remoto",
    index: 4,
    images: [
      { src: "/imgs/placeholder.png", alt: "Detalhe do Carrinho de Controle Remoto 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Carrinho de Controle Remoto 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Carrinho de Controle Remoto 3" }
    ],
    people: peopleData
  },
  {
    id: "irrigador-inteligente",
    title: "Irrigador Inteligente",
    description: "[PLACEHOLDER]",
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Irrigador Inteligente",
    index: 5,
    images: [
      { src: "/imgs/placeholder.png", alt: "Detalhe do Irrigador Inteligente 1" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Irrigador Inteligente 2" },
      { src: "/imgs/placeholder.png", alt: "Detalhe do Irrigador Inteligente 3" }
    ],
    people: peopleData
  }
];

const Projects = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <ProjectSection
          key={index}
          id={project.id}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          index={project.index}
          images={project.images}
        />
      ))}
    </div>
  );
};

export default Projects;
