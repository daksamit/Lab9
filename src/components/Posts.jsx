import { useEffect, useState } from 'react';
import PostsTable from './PostsTable.jsx';

const API_URL = 'http://localhost:3001/api/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nie udalo sie pobrac listy postow.');
        }

        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoaded(true);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setIsLoaded(true);
      });
  }, []);

  return (
    <section className="app-panel p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="mb-1">Lista postow</h2>
          <p className="text-secondary mb-0">
            TODO: polacz liste z routingiem szczegolow przez komponent
            PostsTable.
          </p>
        </div>
      </div>

      {error ? (
        <div className="alert alert-danger">Blad: {error.message}</div>
      ) : null}

      {!isLoaded ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-label="Ladowanie" />
        </div>
      ) : null}

      {isLoaded && !error ? <PostsTable posts={posts} /> : null}
    </section>
  );
};

export default Posts;
