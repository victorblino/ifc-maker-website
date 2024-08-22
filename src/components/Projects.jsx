import React from 'react';
import ProjectSection from './ProjectSection'; 
import peopleData from '../data/peopleData';

const projectsData = [
  {
    id: "mao-robotica",
    title: "Mão Robótica",
    description: "A mão robótica exemplifica a fusão de tecnologias da Indústria 4.0, unindo robótica, visão computacional e inteligência artificial para realizar tarefas complexas e se adaptar ao ambiente. Para sua construção, utilizaremos impressão 3D para as partes, além de um Arduino.", 
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "Mão Robótica",
    index: 0,
    images: [
      { type: 'video', src: "/videos/mao-robotica/video1.mp4", alt: "Vídeo da Mão Robótica em ação" },
      { type: 'video', src: "/videos/mao-robotica/video2.mp4", alt: "Vídeo da Mão Robótica em ação" },
      { type: 'video', src: "/videos/mao-robotica/video3.mp4", alt: "Vídeo da Mão Robótica em ação" },
      { type: 'video', src: "/videos/mao-robotica/video4.mp4", alt: "Vídeo da Mão Robótica em ação" },
      { type: 'video', src: "/videos/mao-robotica/video5.mp4", alt: "Vídeo da Mão Robótica em ação" }
    ]
  },
  {
    id: "lego-mindstorms",
    title: "Lego Mindstorms",
    description: `O projeto utilizou o LEGO Mindstorms EV3 através da plataforma LEGO Education para criar os robôs "R3PTAR" e "EV3RSTORM". Com 612 peças, sensores e um processador de 32 bits, o kit permitiu a construção e programação dos robôs usando o software LEGO Education EV3, compatível com PC e Mac.`,
    imgSrc: "/imgs/lego/image1.jpg",
    imgAlt: "Lego Mindstorms",
    index: 1,
    images: [
      { type: 'video', src: "/videos/lego/video1.mp4", alt: "Vídeo do Lego Mindstorms em ação" },
      { type: 'video', src: "/videos/lego/video2.mp4", alt: "Vídeo do Lego Mindstorms em ação" },
      { type: 'video', src: "/videos/lego/video3.mp4", alt: "Vídeo do Lego Mindstorms em ação" },
      { type: 'video', src: "/videos/lego/video4.mp4", alt: "Vídeo do Lego Mindstorms em ação" },
      { type: 'video', src: "/videos/lego/video5.mp4", alt: "Vídeo do Lego Mindstorms em ação" },
    ],
    people: peopleData
  },
  {
    id: "residencial-inteligente",
    title: "Residencial Inteligente",
    description: `Um residencial inteligente com caixa de água utilizando Arduino é um sistema que integra tecnologia e automação para otimizar o uso da água em uma residência. Com a ajuda de sensores e atuadores conectados a uma placa Arduino, é possível monitorar e controlar a caixa de água de maneira eficiente.`,
    imgSrc: "/imgs/residencial-inteligente/image1.jpg",
    imgAlt: "Imagem que mostra o residencial inteligente",
    index: 1,
    images: [
      { type: 'image', src: "/imgs/residencial-inteligente/image1.jpg", alt: "Residencial  Inteligente" },
    ],
    people: peopleData
  },
  {
    id: "carrinho-controle",
    title: "Carrinho de Controle Remoto",
    description: `Um carrinho de controle remoto com Arduino é um veículo que pode ser controlado à distância utilizando um celular via bluetooth. Com o Arduino, uma plataforma de prototipagem eletrônica, é possível programar o carrinho para executar diferentes comandos, como avançar, retroceder, virar à esquerda e à direita. Ele também acende luzes na frente e atrás, buzina, e conta com um sistema automático de luzes ao escurecer.`,
    imgSrc: "/imgs/carrinho-controle/image1.jpg",
    imgAlt: "[Placeholder]",
    index: 1,
    images: [
      {type: 'video', src:'/videos/carrinho-controle/video1.mp4'}
    ],
    people: peopleData
  },
  {
    id: "irrigador-inteligente",
    title: "Irrigador Inteligente",
    description: `Um irrigador inteligente com Arduino é um sistema automatizado projetado para otimizar a irrigação de plantas, utilizando sensores e a programação de microcontroladores. Com esse sistema, é possível monitorar a umidade do solo e as condições climáticas em tempo real, garantindo que as plantas recebam a quantidade adequada de água, sem desperdícios.`,
    imgSrc: "/imgs/placeholder.png",
    imgAlt: "[Placeholder]",
    index: 1,
    images: [
      // 
    ],
    people: peopleData
  },
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
