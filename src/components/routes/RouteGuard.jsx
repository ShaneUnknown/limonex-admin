import { Navigate } from "react-router";
import Loading from "../Loading"
import { useAuth } from "../../context/AuthContext";

const RouteGuard = ({ children, requireAdmin = false }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) return <Loading />;

  if (!user) return <Navigate to="/login" />;

  if (requireAdmin && !isAdmin)
    return <Navigate to="/staff" />;

  return children;
}

export default RouteGuard