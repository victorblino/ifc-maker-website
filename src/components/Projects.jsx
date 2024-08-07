import React from 'react';
import ProjectSection from './ProjectSection';  // Garanta que este caminho esteja correto
import peopleData from '../data/peopleData';

// Array de dados dos projetos
const projectsData = [
    {
        title: "Mão Robótica",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/placeholder.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ]
    },
    {
        title: "Lego Mindstorms",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/lego/legoev3logo.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/lego/lego_snake.webp", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ],
        people: peopleData
    },
    {
        title: "Casinha de Bonecas",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/placeholder.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ],
        people: peopleData
    },
    {
        title: "Reservatório de Água",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/placeholder.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ],
        people: peopleData
    },
    {
        title: "Carrinho de Controle Remoto",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/placeholder.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ],
        people: peopleData
    },
    {
        title: "Irrigador Inteligente",
        description: "[PLACEHOLDER]",
        imgSrc: "/imgs/placeholder.png",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
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
