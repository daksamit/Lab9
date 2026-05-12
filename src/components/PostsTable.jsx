const PostsTable = ({ posts }) => {
  if (posts.length === 0) {
    return <div className="alert alert-warning mb-0">Brak postow do wyswietlenia.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytul</th>
            <th>Podglad tresci</th>
            <th>Szczegoly</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            const postId = item._id || item.id;

            return (
              <tr key={postId}>
                <td>{postId}</td>
                <td>{item.title}</td>
                <td>{item.text.slice(0, 70)}...</td>
                <td>
                  {/* TODO: Dodaj Link do `/posts/${postId}` z etykieta "Szczegoly". */}
                  <span className="badge text-bg-secondary">TODO</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
