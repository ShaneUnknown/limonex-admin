import { Navigate } from "react-router";
import Loading from "../Loading"
import { useAuth } from "../../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) return <Loading />;

  if (user)
    return <Navigate to={isAdmin ? "/admin" : "/staff"} />;

  return children;
}

export default PublicRoute