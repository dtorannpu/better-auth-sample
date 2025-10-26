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
  return <></>;
};

export default Home;
