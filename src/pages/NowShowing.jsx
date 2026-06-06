import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../helper/api";
import NowShowingCard from "../components/NowShowingCard";
import Carousel from "../components/Carousel";

export default function NowShowing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/movies/now-showing", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log(response);
        setMovies(response.data);
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
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5 ">
        <Carousel />
      </div>
      <div className="container mt-5">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="col" key={movie.title}>
                <NowShowingCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
