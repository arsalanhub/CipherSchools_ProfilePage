import React from "react";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function ProfilePage() {
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
