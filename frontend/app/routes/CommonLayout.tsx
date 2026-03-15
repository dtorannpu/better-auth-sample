import { NavLink, Outlet, useNavigate } from "react-router";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/page1"
          className={({ isActive }) =>
            `rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          ページ1
        </NavLink>
        <NavLink
          to="/page2"
          className={({ isActive }) =>
            `rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          ページ2
        </NavLink>
        <NavLink
          to="/page3"
          className={({ isActive }) =>
            `rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          ページ3
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default CommonLayout;
