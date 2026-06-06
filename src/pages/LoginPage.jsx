import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../helper/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //1. request ke server
      const response = await api.post("/user/login", {
        email: email,
        password: password,
      });

      //2. save access token ke localstorage
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("email", email);
      //localStorage.access_token = respon.data.access_token

      //3. move to homepage
      navigate("/");
      console.log("email: ", email);
      console.log(response);
    } catch (error) {
      console.log(error);
      if (error.response) {
        Swal.fire({
          title: "Error nih",
          text: error.response.data.message,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error nih",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className="col d-flex  justify-content-center align-items-center">
        <img width={500} src="/cart.png" alt="" />
      </div>

      <div
        className="col d-flex flex-column //agar login ke bawah!!
    
      justify-content-center align-items-center "
        style={{ backgroundColor: "#991b1b" }}
      >
        <form onSubmit={handleSubmit} className="w-50 //agar ukurannya gede">
          <h1 className="mb-4">Login</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <br />
        <p>
          Don't have an account yet?{" "}
          <Link className="btn btn-warning" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
