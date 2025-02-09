export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"></p>
        <h2>Susisiekite</h2>
        <p className="text-lg">
          Atsakymo laikas įprastai iki 2 darbo dienų
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Vardas</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Pavarde</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">E-paštas</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Tel. Numeris</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Papasakokit plačiau apie savo idėją</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Įrašyti savo žinutę"
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Pateikti</button>
        </div>
      </form>
    </section>
  );
}
