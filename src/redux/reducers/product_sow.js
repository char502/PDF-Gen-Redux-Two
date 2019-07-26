import { PRODUCT_SOW } from '../actions/types';

const initialState = {
  product_sow: {
    DXI_Prod: '',
    Encryp_Key_Prod: '',
    Q_LATTUS: '',
    Q_Scalari: ''
  }
};

const product_sow = (state=initialState, action) => {
  switch(action.type) {
    case PRODUCT_SOW.DXI_PRODUCTS:
      return {
        ...state,
        product_sow: { ...state.product_sow, DXI_Prod: action.payload }
      }
    case PRODUCT_SOW.ENCRYPTION_KEY_MANAGER_PRODUCTS:
      return {
        ...state,
        product_sow: { ...state.product_sow, Encryp_Key_Prod: action.payload }
      }
    case PRODUCT_SOW.QUANTUM_LATTUS_STORAGE:
      return {
        ...state,
        product_sow: { ...state.product_sow, Q_LATTUS: action.payload }
      }
    case PRODUCT_SOW.QUANTUM_SCALARI_3LTO:
      return {
        ...state,
        product_sow: { ...state.product_sow, Q_Scalari: action.payload }
      }
    default:
      return state;
  }
}

export default product_sow;