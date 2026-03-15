import { Form, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { authClient } from "~/lib/auth-client";
import Button from "~/components/Button";

export const meta = () => {
  return [{ title: "ログイン" }, { name: "description", content: "ログイン" }];
};

const Login = () => {
  const location = useLocation();
  const nvavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";

  const login = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: from,
      },
      {
        onRequest: (ctx) => {
          // show loading state
        },
        onSuccess: (ctx) => {
          // redirect to home
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      },
    );
  };

  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-white">ログイン</h2>

      <Form onSubmit={login}>
        <div className="grid gap-6 m-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <Button type="submit">ログイン</Button>
          </div>
          <div>
            <Button type="button" onClick={() => nvavigate("/signup")}>
              アカウント作成
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
