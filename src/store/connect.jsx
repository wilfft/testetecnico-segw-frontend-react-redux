export const mapStateToProps = (state) => {
  return {
    reload: state.autorizaReload,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    reloadFalse: () => dispatch({ type: "FOI_CARREGADO" }),
    reloadTrue: () => dispatch({ type: "CARREGA_POST" }),
  };
};
