const initialState = {
  autorizaReload: false,
  //posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARREGA_POST": {
      console.log(" autorizaReload: true ");
      return { autorizaReload: true };
    }
    case "FOI_CARREGADO": {
      console.log("autorizaReload: false ");
      return { autorizaReload: false };
    }

    default:
      return state;
  }
};

export default reducer;
