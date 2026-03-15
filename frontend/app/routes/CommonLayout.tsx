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
    <div className="p-2 flex flex-col gap-4">
      <nav>
        <Button type="submit" onClick={handleLogout}>
          ログアウト
        </Button>
        <Link
          to="/"
          className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
        >
          Home
        </Link>
        <Link
          to="/page1"
          className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
        >
          ページ1
        </Link>
        <Link
          to="/page2"
          className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
        >
          ページ2
        </Link>
        <Link
          to="/page3"
          className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
        >
          ページ3
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default CommonLayout;
