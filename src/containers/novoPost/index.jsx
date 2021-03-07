import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { salvaPost } from "./../../api";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";
import "./NovoPost.css";
const NovoPost = (props) => {
  const [novoPost, setNovoPost] = useState({ autor: "", conteudo: "" });

  const cliqueSalvar = (event) => {
    event.preventDefault();

    if (
      novoPost.autor.trim().length > 2 ||
      novoPost.conteudo.trim().length > 1
    ) {
      salvaPost(novoPost).then(props.solicitarReload());

      setNovoPost({ autor: "", conteudo: "" });
      //carregaPosts();
    } else {
      console.log(
        "Autor precisa ter mais que 2 caracteres e conteudo maior que 1 caracter"
      );
    }
  };
  const nomeDigitando = (autor) => {
    setNovoPost({ ...novoPost, autor: autor });
  };
  const conteudoDigitando = (conteudo) => {
    setNovoPost({ ...novoPost, conteudo: conteudo });
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

export default connect(null, mapDispatchToProps)(NovoPost);
