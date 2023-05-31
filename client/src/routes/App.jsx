import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components/";
import loadable from "@loadable/component";
import "./App.css";

const HomePage = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.HomePage,
});

const GameDetail = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.GameDetail,
});

const MainRoute = () => {
  return (
    <Routes>
      <Route exac path="/" element={<PublicRoute component={HomePage} />} />
      <Route
        exac
        path="/game/:game"
        element={<PublicRoute component={GameDetail} />}
      />
      <Route path="*" element={<div>ocaz</div>} />
    </Routes>
  );
};

export default MainRoute;
