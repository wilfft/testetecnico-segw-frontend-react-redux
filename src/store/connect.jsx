export const mapStateToProps = (state) => {
  return {
    reload: state.autorizaReload,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    postsCarregados: () => dispatch({ type: "FOI_CARREGADO" }),
    solicitarReload: () => dispatch({ type: "CARREGA_POST" }),
  };
};
