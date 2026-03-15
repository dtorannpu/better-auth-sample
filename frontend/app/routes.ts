import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("/signup", "routes/Signup.tsx"),
  route("/signup-success", "routes/SignupSuccess.tsx"),
  route("/login", "routes/Login.tsx"),

  layout("routes/PrivatePage.tsx", [
    layout("routes/CommonLayout.tsx", [
      index("routes/Home.tsx"),
      route("/page1", "routes/Page1.tsx"),
      route("/page2", "routes/Page2.tsx"),
      route("/page3", "routes/Page3.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
