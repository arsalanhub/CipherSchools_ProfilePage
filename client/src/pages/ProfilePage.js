import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function ProfilePage() {
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("userData");
    if(!data) navigate("/");
  }, [])
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "88.5vh" }}>
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
}
