import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { salvaPost } from "./../../api";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../store/connect";
import "./NovoPost.css";

const NovoPost = (props) => {
  const [novoPost, setNovoPost] = useState({ autor: "", conteudo: "" });
  const [mensagemErro, setMensagemErro] = useState(false);

  const cliqueSalvar = (event) => {
    event.preventDefault();

    if (
      novoPost.autor.trim().length > 2 &&
      novoPost.conteudo.trim().length > 2 &&
      novoPost.autor.trim().length < 50 &&
      novoPost.conteudo.trim().length <= 1000
    ) {
      salvaPost(novoPost)
        .then((res) => setNovoPost({ autor: "", conteudo: "" }))
        .then(() => props.reloadTrue())
        .catch((err) => console.error(err));
    } else {
      setTimeout(() => setMensagemErro(true), 0);
      setMensagemErro(false);
    }
    props.reloadTrue();
    console.log("solicita reaload");
    //  setNovoPost({ autor: "", conteudo: "" });

    //carregaPosts();
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

            {mensagemErro ? (
              <p style={{ opacity: 0 }} className="mensagem-erro">
                "Seu nome precisa ter de 2 a 50 caracteres e o texto, de 2 a
                1000 caracteres, confira"
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(NovoPost);
