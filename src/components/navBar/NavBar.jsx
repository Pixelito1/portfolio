function NavBar() {
  return (
    <section className="flex justify-between items-center px-[10%] py-5 bg-gray-900 font-signika text-white fixed w-full z-20">
      <header>
        <p className="text-2xl md:text-3xl">Bienvenidos</p>
      </header>
      <nav>
        <ul className="md:flex gap-10 text-xl hidden">
          <li>
            <a href="#1">Sobre mi</a>
          </li>
          <li>
            <a href="#2">Trabajos</a>
          </li>
          <li>
            <a href="#3">Estudios</a>
          </li>
          <li>
            <a href="#4">contacto</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default NavBar;
