import Carousel from "./Carousel";

export default function NowShowingCard(props) {
  console.log(props);
  const { movie } = props;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={movie.coverUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.synopsis}</p>
          <span className="badge bg-warning text-dark">
            Rating: {movie.rating}
          </span>
          <br />
          <br />
          <span className="badge bg-danger text-dark">
            Release Date: {movie.releaseDate}
          </span>
        </div>
      </div>
    </>
  );
}
