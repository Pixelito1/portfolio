import { Studies } from "./Studies"; // Importa los datos desde el archivo data.js

function Study() {
  return (
    <section>
      <div className="flex flex-wrap justify-center md:gap-8 text-center ">
        {Studies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col items-center  w-96 p-4 m-8 rounded-xl border-4 border-orange-500 shadow-orangee hover:bg-orange-400 hover:bg-opacity-25 "
          >
            <img
              className="h-40 md:w-72 md:h-72 mb-3"
              src={study.imageStudy}
              alt="study"
            />
            <p className="text-orange-400 font-amatic text-2xl md:text-5xl">
              {study.lvl}
            </p>
            <p className="text-white font-signika text-sm md:text-xl ">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Study;
