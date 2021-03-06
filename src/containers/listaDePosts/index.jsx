import React, { useEffect, useState } from "react";
import { carregaPosts, upvotePost } from "../../api";
import PostCard from "../../components/postCard";

const ListaDePosts = () => {
  const [posts, setPosts] = useState([]);

  const trazerPosts = () => {
    carregaPosts()
      .then((response) => setPosts(response.data))
      .catch((e) => {
        console.log("erro ao iniciar posts ");
      });
    // console.log(erro);
  };
  useEffect(() => {
    trazerPosts();
  }, []);

  const votar = (id) => {
    upvotePost(id).then(() => trazerPosts());
  };

  return (
    <div>
      {posts.map((postData) => (
        <PostCard
          key={postData.id}
          post={postData}
          clique={() => votar(postData.id)}
        ></PostCard>
      ))}
    </div>
  );
};

export default ListaDePosts;
