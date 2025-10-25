import { useNavigate } from "react-router";
import Button from "~/components/Button";
import { authClient } from "~/lib/auth-client";

export const meta = () => {
  return [
    { title: "トップページ" },
    { name: "description", content: "トップページ" },
  ];
};

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/signin", { replace: true });
        },
      },
    });
  };

  return (
    <>
      <Button type="submit" onClick={handleLogout}>
        ログアウト
      </Button>
    </>
  );
};

export default Home;
