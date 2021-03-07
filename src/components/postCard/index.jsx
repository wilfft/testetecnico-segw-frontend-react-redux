import React from "react";
import { Container } from "react-bootstrap";
import "./PostCard.css";

import UpVoteBotao from "../upVoteBotao/UpVoteBotao";

const PostCard = (props) => (
  <div className="postContainer">
    <Container>
      <div className="conteudoPost">
        <p className="nome">{props.post.autor}</p>
        <p className="conteudo">{props.post.conteudo}</p>
      </div>

      <div className="dataEupVoteContainer">
        <div className="data">
          <p>{props.post.horarioPostagem}</p>
        </div>

        <div className="upVoteContainer">
          <UpVoteBotao cliqueUpvote={props.cliqueUpvote} />
          <p className="contadorUpvote">{props.post.upvotes}</p>
        </div>
      </div>
    </Container>
  </div>
);

export default PostCard;
