import React, { useEffect, useState } from "react";
import { fetchPosts, upvotePost } from "../../api";
import PostCard from "../../components/postCard";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";
import "./ListaDePosts.css";

const ListaDePosts = (props) => {
  const [posts, setPosts] = useState([]);

  const trazerPosts = () => {
    fetchPosts().then((response) => setPosts(response.data));
    props.reloadFalse();
  };

  useEffect(() => {
    if (props.reload) {
      trazerPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.reload]);

  useEffect(() => {
    trazerPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const votar = (id) => {
    upvotePost(id)
      .then(() => props.reloadTrue())
      .catch((err) => console.error(err));
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
