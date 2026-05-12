import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="app-panel p-5 text-center">
    <p className="display-1 text-danger fw-bold mb-0">404</p>
    <h2 className="mb-3">TODO: przygotuj strone bledu</h2>
    <p className="text-secondary mb-4">
      TODO: dodaj opis dla niepoprawnego adresu oraz link powrotu.
    </p>
    {/* TODO: Zamien ten placeholder na Link do "/" z etykieta np. "Wroc na strone glowna". */}
    <span className="btn btn-primary disabled" aria-disabled="true">
      TODO: link powrotny
    </span>
  </section>
);

export default NotFound;
