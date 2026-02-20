import { Navigate } from "react-router-dom";

const Privateroutes = ({ children }) => {
  const session = localStorage.getItem("session");
  if (!session || Date.now() > session) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Privateroutes;