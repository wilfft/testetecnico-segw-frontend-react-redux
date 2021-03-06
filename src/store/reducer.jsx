const initialState = {
  autorizaReload: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARREGA_POST": {
      return state;
    }
    case "FOI_CARREGADO": {
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
