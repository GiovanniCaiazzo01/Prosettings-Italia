import { Logo } from "../../components";
import SupportedGames from "./pieces/SupportedGames";

const HomePage = () => {
  return (
    <>
      <Logo width={200} />
      <SupportedGames />
    </>
  );
};

export { HomePage };
