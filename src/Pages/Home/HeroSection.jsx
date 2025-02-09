export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Sveiki, aš Domantas</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Programuotojas
          </h1>
          <p className="hero--section-description">
            Kuriu modernias, greitas ir patogias internetines sistemas – 
            <br /> nuo interaktyvių svetainių iki galingų backend sprendimų.
          </p>
        </div>
        <a href="/cv.pdf" download="Domantas_CV.pdf">
          <button className="btn btn-primary" style={{ marginTop: "35px" }}>Mano CV</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/465275280_9440496485965977_139153629814964391_n.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
