import { PRODUCT_SOW } from './types';

export const product_sow = data => {
  switch(data.id) {
    case 'DXi Products':
      return {
        type: PRODUCT_SOW.DXI_PRODUCTS,
        payload: data.configOption
      }
    case 'Encryption Key Manager Products':
      return {
        type: PRODUCT_SOW.ENCRYPTION_KEY_MANAGER_PRODUCTS,
        payload: data.configOption
      }
    case 'Quantum LATTUS Storage':
      return {
        type: PRODUCT_SOW.QUANTUM_LATTUS_STORAGE,
        payload: data.configOption
      }
    case 'Quantum Scalari 3LTO':
      return {
        type: PRODUCT_SOW.QUANTUM_SCALARI_3LTO,
        payload: data.configOption
      }
    default:
      return null;
  }
}