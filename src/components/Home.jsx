import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="app-panel p-5 text-center">
      <p className="text-uppercase text-primary fw-bold mb-2">Laboratorium 9</p>
      <h1 className="display-5 hero-title fw-bold">Routing w ReactJS</h1>
      <p className="lead text-secondary mb-4">
        Ten starter pokazuje podstawowa konfiguracje React Router oraz przejscie
        od listy postow do widoku szczegolow.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-lg px-4"
        // TODO: Uzyj useNavigate(), aby po kliknieciu przejsc do "/posts".
        onClick={() => {}}
      >
        Przejdz do postow
      </button>
    </section>
  );
};

export default Home;
