export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        {/* START CAROUSAL */}
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: "65vh" }}>
            <div className="carousel-item active h-100 position-relative">
              <img
                src="../rampage.jpg"
                className="d-block w-100 h-100"
                alt="Rampage"
                style={{ objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                }}
              />

              {/* Caption */}
              <div className="position-absolute bottom-0 start-0 p-5 text-white">
                <h1 className="fw-bold display-4">Rampage</h1>
                <p className="lead">Action, Adventure, Sci-Fi</p>

                <button className="btn btn-danger me-2">Watch Now</button>

                <button className="btn btn-outline-light">More Info</button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item h-100 position-relative">
              <img
                src="../kid.jpg"
                className="d-block w-100 h-100"
                alt="Kid"
                style={{ objectFit: "cover" }}
              />

              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                }}
              />

              <div className="position-absolute bottom-0 start-0 p-5 text-white">
                <h1 className="fw-bold display-4">The Kid</h1>
                <p className="lead">Drama • Family</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item h-100 position-relative">
              <img
                src="../original.jpg"
                className="d-block w-100 h-100"
                alt="Kid"
                style={{ objectFit: "cover" }}
              />

              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                }}
              />

              <div className="position-absolute bottom-0 start-0 p-5 text-white">
                <h1 className="fw-bold display-4">Thriller</h1>
                <p className="lead">Horror • Sci-Fi</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        {/* END CAROUSAL */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
