import { Link } from 'react-router-dom';

const About = () => (
  <section className="app-panel p-4">
    <h2 className="mb-3">O aplikacji</h2>
    <p>
      TODO: wpisz nazwe aplikacji i krotki opis projektu.
    </p>
    <p>
      TODO: uzupelnij imie autora zgodnie z poleceniem z laboratorium.
    </p>
    <div className="d-flex gap-2">
      <Link to="/" className="btn btn-primary">
        Strona glowna
      </Link>
      <Link to="/posts" className="btn btn-outline-primary">
        Lista postow
      </Link>
    </div>
  </section>
);

export default About;
