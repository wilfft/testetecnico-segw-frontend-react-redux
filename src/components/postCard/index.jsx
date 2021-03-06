const PostCard = (props) => {
  return (
    <div>
      <p>TITULO</p>
      <p>{props.post.autor}</p>
      <p>{props.post.conteudo}</p>
      <p>{props.post.horarioPostagem}</p>
      <p>{props.post.upvotes}</p>
    </div>
  );
};
export default PostCard;
