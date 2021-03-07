import React, { useEffect, useState } from "react";
import { fetchPosts, upvotePost } from "../../api";
import PostCard from "../../components/postCard";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";
import "./ListaDePosts.css";

const ListaDePosts = (props) => {
  const [posts, setPosts] = useState([]);

  const preencheListaPosts = async () => {
    await fetchPosts().then((response) => setPosts(response.data));
  };
  const trazerPosts = async () => {
    await preencheListaPosts();
    props.reloadFalse();
    console.log("trazendo posts");
  };

  useEffect(() => {
    console.log("USEEFFECT: ", props.reload);
    if (props.reload) {
      trazerPosts();
    }
  }, [props.reload]);
  useEffect(() => {
    console.log("DEVE OCORRER SO 1 vez: ", props.reload);
    preencheListaPosts();
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
