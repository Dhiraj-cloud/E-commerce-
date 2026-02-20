import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
        <h1 className="text-2xl text-gray-900 dark:text-white">
          Welcome, {user ? user.name : "Guest"}
        </h1>
      </div>
    </>
  );
};

export default Dashboard;