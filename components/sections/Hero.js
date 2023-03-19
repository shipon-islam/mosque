function Hero() {
  return (
    <section className="hero-banner">
      <div className="grid lg:grid-cols-2 md:pl-16 px-4">
        <aside className="text-gray-900 mt-16">
          <h3 className="md:text-5xl text-3xl capitalize font-bold mt-16 tracking-wider ">
            in the name of allah, <br /> the creator of the <br />
            universe
          </h3>
          <p className="py-7 md:pr-28">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sequi eius eveniet omnis. Nemo aut ut exercitationem natus. Sequi,
            aperiam. Nostrum unde quidem accusamus omnis iusto ad molestias
            voluptas saepe?
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-800 py-[0.6rem] px-4 text-white uppercase font-medium rounded-md hover:from-green-800 hover:to-green-500  block transition-colors duration-700">
            join our community
          </button>
        </aside>
        <div className="hidden lg:block mt-8">
          <img
            id="hero_img"
            className="h-full w-fit "
            src="/images/mosque.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
