import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { salvaPost, carregaPosts } from "./../../api";
const NovoPost = () => {
  const [novoPost, setNovoPost] = useState({ autor: "", conteudo: "" });
  const [atualiza, setAtualiza] = useState(false);

  useEffect(() => {
    carregaPosts();
    console.log("ATUALIZOU");
    // setAtualiza(false);
  }, []);

  const cliqueSalvar = (event) => {
    event.preventDefault();

    if (
      novoPost.autor.trim().length > 2 ||
      novoPost.conteudo.trim().length > 1
    ) {
      salvaPost(novoPost);
      carregaPosts();
    } else {
      console.log(
        "Autor precisa ter mais que 2 caracteres e conteudo maior que 1 caracter"
      );
    }
  };
  const nomeDigitando = (autor) => {
    setNovoPost({ ...novoPost, autor: autor });
    console.log(novoPost);
  };
  const conteudoDigitando = (conteudo) => {
    setNovoPost({ ...novoPost, conteudo: conteudo });
    console.log(novoPost);
  };
  return (
    <Container>
      <div className="novoPost">
        <div className="area">
          <form
            className="formulario"
            onSubmit={(event) => {
              cliqueSalvar(event);
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
