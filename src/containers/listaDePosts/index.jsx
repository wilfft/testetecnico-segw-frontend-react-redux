import React, { useEffect, useState } from "react";
import { carregaPosts } from "../../api";
import PostCard from "../../components/postCard";

const ListaDePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    carregaPosts()
      .then((response) => setPosts(response.data))
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      {posts.map((res) => (
        <PostCard post={res}></PostCard>
      ))}
    </div>
  );
};

export default ListaDePosts;
