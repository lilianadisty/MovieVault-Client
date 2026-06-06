import { useNavigate } from "react-router-dom";

export default function BottomNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <nav className="navbar  fixed-bottom ">
          <button
            className="btn rounded-circle position-fixed"
            style={{
              bottom: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              backgroundColor: "#991b1b",
              color: "white",
              border: "none",
              fontSize: "24px",
            }}
          >
            💬
          </button>
        </nav>
      </div>
    </>
  );
}
