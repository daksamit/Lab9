import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './components/NotFound.jsx';
import PostDetail from './components/PostDetail.jsx';
import Posts from './components/Posts.jsx';

const App = () => (
  <>
    <Navbar />
    <main className="container py-4">
      <Routes>
        {/* TODO: Dodaj trase "/" renderujaca komponent Home. */}
        {/* TODO: Dodaj trase "/posts" renderujaca komponent Posts. */}
        {/* TODO: Dodaj trase "/posts/:id" renderujaca komponent PostDetail. */}
        {/* TODO: Dodaj trase "/about" renderujaca komponent About. */}
        {/* TODO: Dodaj trase catch-all path="*" renderujaca komponent NotFound. */}
        <Route
          path="*"
          element={
            <section className="app-panel p-4">
              <h2 className="mb-3">TODO: skonfiguruj routing</h2>
              <p className="mb-0">
                Uzupelnij definicje tras w <code>src/App.jsx</code> zgodnie z
                poleceniami z laboratorium.
              </p>
            </section>
          }
        />
      </Routes>
    </main>
  </>
);

export default App;
