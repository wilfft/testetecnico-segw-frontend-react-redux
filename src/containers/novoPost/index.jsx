import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { salvaPost } from "./../../api";
const NovoPost = () => {
  const [novoPost, setNovoPost] = useState({ autor: "", conteudo: "" });

  useEffect(() => {}, []);

  const salvaNovoPost = (event) => {
    event.preventDefault();
    salvaPost(novoPost);
  };
  const nomeDigitando = (autor) => {
    setNovoPost({ autor: autor, conteudo: novoPost.conteudo });
    console.log(novoPost);
  };
  const conteudoDigitando = (conteudo) => {
    setNovoPost({ autor: novoPost.autor, conteudo: conteudo });
  };
  return (
    <Container>
      <div className="novoPost">
        <div className="area">
          <form
            className="formulario"
            onSubmit={(event) => {
              salvaNovoPost(event);
            }}
          >
            <label>Nome:</label>
            <input
              type="text"
              className="nome_formulario"
              value={novoPost.autor}
              onChange={(autor) => nomeDigitando(autor.target.value)}
            />
            <br />
            <label>Postagem:</label>
            <br />
            <textarea
              className="mensagem"
              rows="8"
              value={novoPost.conteudo}
              onChange={(conteudo) => conteudoDigitando(conteudo.target.value)}
            ></textarea>
            <br />
            <input className="btn_submit" type="submit" value="Enviar !" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default NovoPost;
