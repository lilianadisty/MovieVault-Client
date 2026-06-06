import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light  "
          style={{ backgroundColor: "#991b1b" }}
        >
          <div className="container">
            <Link className="navbar-brand" to="/movies/now-showing">
              NOW PLAYING
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/add-movies">
                    Add
                  </Link>
                </li>
              </ul>

              <button
                onClick={() => {
                  localStorage.removeItem("access_token");
                  navigate("/");
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
