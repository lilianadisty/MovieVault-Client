import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../helper/api";

export default function AddMovies() {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [coverFile, setCoverFile] = useState(null);

  console.log({ title, synopsis, releaseDate, duration, rating, coverFile });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("synopsis", synopsis);
      formData.append("releaseDate", releaseDate);
      formData.append("duration", duration);
      formData.append("rating", rating);

      // IMPORTANT: harus sama dengan upload.single("coverUrl")
      formData.append("coverUrl", coverFile);

      await api.post("/movies", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Success",
        text: "Movie berhasil ditambahkan",
        icon: "success",
      });

      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="mt-5 d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 w-50"
        style={{ backgroundColor: "#991b1b", color: "white" }}
      >
        <h2 className="text-center mb-4">Add Movie</h2>

        {/* TITLE */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* COVER FILE */}
        <div className="mb-3">
          <label htmlFor="coverUrl" className="form-label">
            Movie Poster
          </label>
          <input
            id="coverUrl"
            name="coverUrl"
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setCoverFile(e.target.files[0])}
          />
        </div>

        {/* SYNOPSIS */}
        <div className="mb-3">
          <label htmlFor="synopsis" className="form-label">
            Synopsis
          </label>
          <input
            id="synopsis"
            name="synopsis"
            type="text"
            className="form-control"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </div>

        {/* DURATION */}
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <input
            id="duration"
            name="duration"
            type="number"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* RELEASE DATE */}
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">
            Release Date
          </label>
          <input
            id="releaseDate"
            name="releaseDate"
            type="date"
            className="form-control"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>

        {/* RATING */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        {/* BUTTONS */}
        <div className="d-flex gap-3">
          <Link className="btn btn-secondary flex-fill" to={-1}>
            Back
          </Link>
          <button type="submit" className="btn btn-primary flex-fill">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import api from "../helper/api";

// export default function AddMovies() {
//   const [title, setTitle] = useState("");
//   const [coverUrl, setCoverUrl] = useState("");
//   const [synopsis, setSynopsis] = useState("");
//   const [releaseDate, setReleaseDate] = useState("");
//   const [duration, setDuration] = useState("");
//   const [rating, setRating] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post(
//         "/movies",
//         {
//           title,
//           coverUrl,
//           synopsis,
//           releaseDate,
//           duration,
//           rating,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.access_token}`,
//           },
//         },
//       );
//       navigate("/");
//     } catch (error) {
//       if (error.response) {
//         Swal.fire({
//           title: "Error nih",
//           text: error.response.data.message,
//           icon: "error",
//         });
//       } else {
//         Swal.fire({
//           title: "Error nih",
//           text: "Something went wrong",
//           icon: "error",
//         });
//       }
//     }
//   };

//   console.log({ title, coverUrl, synopsis, releaseDate, duration, rating });
//   return (
//     <>
//       <div className="mt-5 d-flex align-items-center justify-content-center ">
//         <form
//           onSubmit={handleSubmit}
//           className="p-4 w-50 "
//           style={{ backgroundColor: "#991b1b" }}
//         >
//           <h2 className="text-center">Add Movie</h2>
//           <div className=" mt-5 mb-3">
//             <label htmlFor="inputTitle" className="form-label">
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="inputTitle"
//               aria-describedby="titleHelp"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="coverUrl" className="form-label">
//               Movie's Poster
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputImage"
//               value={coverUrl}
//               onChange={(e) => {
//                 setCoverUrl(e.target.value);
//               }}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="synopsis" className="form-label">
//               Synopsis
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputSynopsis"
//               value={synopsis}
//               onChange={(e) => setSynopsis(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="duration" className="form-label">
//               Duration
//             </label>
//             <input
//               type="number"
//               className="form-control"
//               id="exampleInputDuration"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="dateRelease" className="form-label">
//               Release-Date
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="exampleInputDate"
//               value={releaseDate}
//               onChange={(e) => setReleaseDate(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="rating" className="form-label">
//               Rating
//             </label>
//             <input
//               type="number"
//               step="0.1"
//               className="form-control"
//               id="exampleInputRating"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//           </div>
//           <div className="d-flex gap-4">
//             <Link className="btn btn-secondary flex-fill" to={-1}>
//               Back
//             </Link>
//             <button type="submit" className="btn btn-primary flex-fill">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
