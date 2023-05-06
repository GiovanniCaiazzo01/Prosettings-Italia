import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "../components/";
import "./App.css";

const MainRoute = () => {
  return (
    <Routes>
      <Route exac path="/" element={<PublicRoute />} />
    </Routes>
  );
};

export default MainRoute;
