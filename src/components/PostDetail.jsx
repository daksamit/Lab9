const PostDetail = () => (
  <article className="app-panel p-4">
    <p className="text-uppercase text-primary fw-semibold mb-2">
      TODO: useParams i useNavigate
    </p>
    <h2 className="mb-3">Widok szczegolow posta</h2>
    <div className="alert alert-info">
      <p className="mb-2">
        TODO: odczytaj parametr <code>id</code> z adresu URL przez{' '}
        <code>useParams()</code>.
      </p>
      <p className="mb-2">
        TODO: pobierz dane posta z endpointu <code>/api/posts/:id</code>.
      </p>
      <p className="mb-2">
        TODO: obsluz stany ladowania, bledu i sukcesu.
      </p>
      <p className="mb-0">
        TODO: dodaj przycisk powrotu korzystajacy z <code>useNavigate()</code>.
      </p>
    </div>
  </article>
);

export default PostDetail;
