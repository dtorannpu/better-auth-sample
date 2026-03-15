import { Link, Outlet, useNavigate } from "react-router";
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

      <nav>
        <Link to="/">Home</Link>
        <Link to="/page1">ページ1</Link>
        <Link to="/page2">ページ2</Link>
        <Link to="/page3">ページ3</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default CommonLayout;
