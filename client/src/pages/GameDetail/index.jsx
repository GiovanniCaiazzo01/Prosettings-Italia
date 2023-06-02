// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { GameInfo } from "./pieces";

const GameDetail = () => {
  const { game } = useParams();
  return <GameInfo game={game} />;
};

export { GameDetail };

// GameDetail.propTypes = {
//   game: PropTypes.string,
// };
