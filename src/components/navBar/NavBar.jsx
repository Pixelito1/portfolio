function NavBar() {
  return (
    <section className="flex justify-between items-center px-[10%] py-5 bg-three font-signika text-white">
      <header>
        <p className="text-3xl">Bienvenidos</p>
      </header>
      <nav>
        <ul className="md:flex gap-10 text-xl hidden">
          <li>Sobre mi</li>
          <li>Trabajos</li>
          <li>Estudios</li>
          <li>contacto</li>
        </ul>
      </nav>
    </section>
  );
}
export default NavBar;
