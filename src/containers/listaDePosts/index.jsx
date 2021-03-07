import React, { useEffect, useState } from "react";
import { carregaPosts, upvotePost } from "../../api";
import PostCard from "../../components/postCard";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";
import "./ListaDePosts.css";

const ListaDePosts = (props) => {
  const [posts, setPosts] = useState([]);

  const trazerPosts = () => {
    carregaPosts()
      .then((response) => setPosts(response.data))
      .catch((e) => {
        console.log("erro ao iniciar posts ");
      });
  };

  useEffect(() => {
    trazerPosts();
    props.postsCarregados();
  }, [props.reload]);

  const votar = (id) => {
    upvotePost(id).then(() => trazerPosts());
  };

  return (
    <Container className="postsContainer">
      {posts.map((postData) => {
        return (
          <PostCard
            key={postData.id}
            post={postData}
            cliqueUpvote={() => votar(postData.id)}
          />
        );
      })}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaDePosts);
