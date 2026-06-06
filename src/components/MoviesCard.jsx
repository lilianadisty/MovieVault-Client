export default function MovieCard(props) {
  console.log(props);
  const { movie, onDelete } = props;

  return (
    <>
      <div className="d-flex">
        <div className="card" style={{ width: "18rem" }}>
          <img src={movie.coverUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.synopsis}</p>
            <div className="row g-2">
              <span
                className="badge bg-warning text-white"
                style={{
                  fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
                  whiteSpace: "normal",
                  display: "inline-block",
                }}
              >
                Duration: {movie.duration} Minutes
              </span>

              <span className="badge bg-warning text-dark">
                Rating: {movie.rating}
              </span>

              <span
                className="badge bg-warning text-dark p-3 "
                style={{
                  fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
                  whiteSpace: "normal",
                  display: "inline-block",
                }}
              >
                Release Date:
                {new Date(movie.releaseDate).toISOString().split("T")[0]}
              </span>
              <br />
              <br />
              <button
                type="button"
                onClick={() => {
                  onDelete(movie.id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
