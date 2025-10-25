import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("/signup", "routes/signup.tsx"),
  route("/login", "routes/login.tsx"),

  layout("routes/PrivatePage.tsx", [
    layout("routes/CommonLayout.tsx", [
      index("routes/home.tsx"),
      route("/page1", "routes/page1.tsx"),
      route("/page2", "routes/page2.tsx"),
      route("/page3", "routes/page3.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
