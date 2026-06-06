import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import ChatWidget from "../pages/ChatWidget";
import Carousel from "./Carousel";

export default function Layout() {
  return (
    <>
      <div className="bg-dark min-vh-100">
        <Navbar />
        <ChatWidget />
        <Outlet />
      </div>
    </>
  );
}
