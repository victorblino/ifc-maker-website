import React from 'react';
import ProjectSection from './ProjectSection';  // Garanta que este caminho esteja correto

// Array de dados dos projetos
const projectsData = [
    {
        title: "Mão Robótica",
        description: "Este é um projeto que utiliza robótica para criar uma mão mecânica controlada por sensores.",
        imgSrc: "/imgs/lego/lego_snake.webp",
        imgAlt: "Mão Robótica",
        index: 0,
        images: [
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 1" },
            { src: "/imgs/placeholder.png", alt: "Detalhe da Mão Robótica 2" }
        ]
    },
    {
        title: "LEGO Mindstorms",
        description: "Explore a engenharia e programação com LEGO Mindstorms.",
        imgSrc: "/imgs/lego/lego_snake.webp",
        imgAlt: "LEGO Mindstorms",
        index: 1,
        images: [
            { src: "/path/to/image-lego1.jpg", alt: "Detalhe do LEGO Mindstorms 1" },
            { src: "/path/to/image-lego2.jpg", alt: "Detalhe do LEGO Mindstorms 2" }
        ]
    },
    // Adicione mais projetos conforme necessário
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
