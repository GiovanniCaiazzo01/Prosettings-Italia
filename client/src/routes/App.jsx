import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components/";
import loadable from "@loadable/component";
import "./App.css";

const HomePage = loadable(() => import("../pages/"), {
  resolveComponent: (components) => components.HomePage,
});

const MainRoute = () => {
  return (
    <Routes>
      <Route exac path="/" element={<PublicRoute />} />
    </Routes>
  );
};

export default MainRoute;
