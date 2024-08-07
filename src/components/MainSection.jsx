import Image from 'next/image';

const MainSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-center justify-center p-8 bg-slate-800 text-[#04a4b4] min-h-screen ">
      <div className=" md:m-1 flex justify-center mb-8 md:mb-0">
        <Image src="/imgs/logo-vertical.png" alt="Logo" width={300} height={300} />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center md:justify-start text-center md:text-left md:pl-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IFC Fraiburgo Maker</h1>
        <p className="text-lg md:text-xl text-white ">
          O projeto "IFC Fraiburgo Maker: Prototipando suas Ideias" apresenta atividades que auxiliam os estudantes no desenvolvimento de diversas ideias por meio da prototipação. Nosso objetivo é desenvolver competências indispensáveis aos profissionais de hoje e do futuro.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
