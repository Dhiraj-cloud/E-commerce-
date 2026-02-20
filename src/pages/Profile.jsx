import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useSelector(state => state.auth);

  if (!user)
    return (
      <p className="text-gray-500 dark:text-gray-300 p-6">
        Loading profile...
      </p>
    );

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 mt-6 bg-white dark:bg-gray-700 rounded-lg shadow transition-colors">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Profile
        </h2>
        <div className="space-y-2">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;