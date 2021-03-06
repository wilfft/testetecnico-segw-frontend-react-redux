const initialState = {
  autorizaReload: false,
  //posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARREGA_POST": {
      console.log("CARREGA_POST");
      return { autorizaReload: true };
    }
    case "FOI_CARREGADO": {
      console.log("FOI CARREGADO");
      return { autorizaReload: false };
    }

    default:
      return state;
  }
};

export default reducer;
