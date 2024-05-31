import imageAbout from "./AboutMe.avif";
import { logos } from "./Icons";
import Icon from "./Icon";
function AboutMe() {
  return (
    <section className="flex flex-col-reverse  md:flex-row justify-center items-center gap-6 text-white md:py-20 py-5">
      <div className="flex flex-col gap-5 w-[80%] md:w-[50%]">
        <p className="text-2xl md:text-5xl font-amatic font-bold">
          Hola soy Diego Jimenez,
          <span className="text-orange-400"> Ingeniero Multimedia </span>
          apasionado por el
          <span className="text-orange-400"> desarrollo web </span>en el
          apartado front-end
        </p>
        <p className="text-sm md:text-xl font-signika">
          He desarrollado habilidades en tecnologías como HTML5, CSS3,
          JavaScript, React y Tailwind CSS, lo que me permite crear páginas web
          modernas y responsivas, adaptables a cualquier dispositivo. Además, mi
          conocimiento en diseño de interfaces y usabilidad asegura que cada
          proyecto en el que trabajo esté centrado en el usuario y cumpla con la
          calidad y rendimiento.
        </p>
        <ul className="flex flex-wrap justify-start md:justify-center  gap-5">
          {logos.map((icon, index) => (
            <Icon text={icon.text} key={index}>
              {icon.logo}
            </Icon>
          ))}
        </ul>
      </div>
      <img
        className="w-60 h-60 md:w-96 md:h-96 rounded-full"
        src={imageAbout}
      ></img>
    </section>
  );
}
export default AboutMe;
