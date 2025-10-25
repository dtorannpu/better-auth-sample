import { Outlet, useNavigate } from "react-router";
import Button from "../components/Button";
import { authClient } from "~/lib/auth-client";

const CommonLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/login", { replace: true });
        },
      },
    });
  };

  return (
    <>
      <Button type="submit" onClick={handleLogout}>
        ログアウト
      </Button>

      <Outlet />
    </>
  );
};

export default CommonLayout;
