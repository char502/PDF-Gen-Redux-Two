const pdfGeneratorMainDefaultState = {
  DXI: "",
  ENCRYPT: "",
  Quantum: "",
  Sca: ""
};

export default (state = pdfGeneratorMainDefaultState, action) => {
  switch (action.type) {
    case "ADD_DXI":
      return {
        ...state,
        DXI: action.id
      };
    case "ADD_ENcrypt":
      return {
        ...state,
        DXI: action.id
      };
    case "ADD_Quantum":
      return {
        ...state,
        DXI: action.id
      };
    default:
    case "ADD_SCA":
      return {
        ...state,
        DXI: action.id
      };
      return state;
  }
};
