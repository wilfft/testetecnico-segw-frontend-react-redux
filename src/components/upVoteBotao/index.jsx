import "./UpVoteBotao.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const UpVoteBotao = (props) => (
  <div className="upVoteButton">
    <FavoriteIcon onClick={props.cliqueUpvote}></FavoriteIcon>
  </div>
);

export default UpVoteBotao;
