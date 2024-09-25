import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Project({ index, images, title, description, urlGit, urlPage }) {
  const odd =
    index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col";

  return (
    <section
      className={`flex ${odd} justify-center items-center gap-2 md:gap-10 pb-16`}
    >
      <div className="flex justify-center md:w-[40%] w-[60%] z-10">
        <ImageGallery
          items={images}
          showPlayButton={true}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          slideInterval={3000}
          slideDuration={500}
        ></ImageGallery>
      </div>
      <div className="flex w-[80%] md:w-[30%]">
        <div className="flex flex-col items-center gap-2 md:gap-6 text-white ">
          <p className="font-amatic text-2xl md:text-5xl text-orange-400 text-shadow">
            {title}
          </p>
          <p className="font-signika text-sm md:text-xl">{description}</p>
          <div className="flex gap-10 ">
            <button className="bg-two py-2 px-10 text-sm md:text-xl rounded-xl font-signika shadow-two shadow-sm hover:bg-teal-500">
              <a target="_blank" href={urlPage}>
                Vista
              </a>
            </button>
            <button className="bg-three py-2 px-10 text-sm md:text-xl rounded-xl font-signika shadow-sm hover:bg-sky-900">
              <a target="_blank" href={urlGit}>
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
