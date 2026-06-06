import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../helper/api";
import MovieCard from "../components/MoviesCard";
import Carousel from "../components/Carousel";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    try {
      const response = await api.get("/movies", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(response);
      setMovies(response.data.movies);
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Ihh Error Movie",
          text: error.response.data.message,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error gimana nic",
          text: "Something went wrong!",
          icon: "error",
        });
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log("id", id);
    try {
      await api.delete(`/movies/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      fetchData();
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Ihh Error Movie",
          text: error.response.data.message,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error gimana nic",
          text: "Something went wrong!",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div>
          <Carousel />
        </div>
        <br />
        <br />

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movies.map((movie) => {
            return (
              <div className="col" key={movie.id}>
                <MovieCard onDelete={handleDelete} movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
