import React, { useEffect, useState } from "react";
import { carregaPosts, upvotePost } from "../../api";
import PostCard from "../../components/postCard";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";

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
    <div>
      {posts.map((postData) => (
        <PostCard
          key={postData.id}
          post={postData}
          cliqueUpvote={() => votar(postData.id)}
        ></PostCard>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaDePosts);
