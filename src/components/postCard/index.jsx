const PostCard = (props) => {
  return (
    <div>
      <p>TITULO</p>
      <p>{props.post.autor}</p>
      <p>{props.post.conteudo}</p>
      <p>{props.post.horarioPostagem}</p>
      <button onClick={props.clique}>{props.post.upvotes}</button>
    </div>
  );
};
export default PostCard;
