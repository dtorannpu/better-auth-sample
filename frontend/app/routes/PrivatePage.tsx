import { Navigate, Outlet, useLocation } from "react-router";
import { authClient } from "~/lib/auth-client";

const PrivatePage = () => {
  const location = useLocation();
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivatePage;
