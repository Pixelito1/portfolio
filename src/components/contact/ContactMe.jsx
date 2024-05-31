import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function ContactMe() {
  return (
    <section className="bg-gray-900 py-12 mt-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Contáctame
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Siéntete libre de ponerte en contacto conmigo a través de cualquiera
          de los siguientes métodos:
        </p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Envíame un Mensaje
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-400 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-400 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Tu email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-400 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows="4"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Sígueme</h3>
                <p className="text-gray-400 mb-4">
                  Mantente conectado conmigo a través de las redes sociales:
                </p>
                <div className="flex justify-start space-x-4">
                  <a
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaTwitter size={30} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-gray-400 hover:text-pink-600"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-blue-800"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://github.com"
                    className="text-gray-400 hover:text-gray-800"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
                <div className="mt-8">
                  <p className="text-gray-400 mb-4">
                    <strong>Email:</strong>
                    <br />
                    diego842010asd@gmail.com
                  </p>
                  <p className="text-gray-400 mb-4">
                    <strong>Residencia:</strong>
                    <br />
                    Tocancipá, Cundinamarca, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
