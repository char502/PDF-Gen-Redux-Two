import quantumDXiBackup from "../../../images/quantumDXiBackup.jpg";
import quantumEncryptionKeyManager from "../../../images/quantumEncryptionKeyManager.jpg";
import quantumLATTUSStorage from "../../../images/quantumLATTUSStorage.jpg";
import quantumScalari3LTO from "../../../images/quantumScalari3LTO.jpg";

let productOptions = [
  {
    id: 1,
    productName: "DXi Products",
    productImage: quantumDXiBackup,
    productImageAlt: "A DXi Backup machine",
    productConfig: [
      "Select a DXI Config",
      "Artico Install and Config",
      "DXi47XX Onsite Install and Config",
      "DXi8500 Onsite Installation and Config"
    ]
  },
  {
    id: 2,
    productName: "Encryption Key Manager Products",
    productImage: quantumEncryptionKeyManager,
    productImageAlt: "quantumEncryptionKeyManager",
    productConfig: [
      "Select an EKM Product Config",
      "Scalar Key Manager",
      "Quantum Scalar"
    ]
  },
  {
    id: 3,
    productName: "Quantum LATTUS Storage",
    productImage: quantumLATTUSStorage,
    productImageAlt: "Quantum LATTUS Storage",
    productConfig: [
      "Select a LATTUS Config",
      "Lattus Hardware Install",
      "Lattus Hardware Upgrade"
    ]
  },
  {
    id: 4,
    productName: "Quantum Scalari 3LTO",
    productImage: quantumScalari3LTO,
    productImageAlt: "quantumScalari3LTO",
    productConfig: [
      "Select a Scalari Configuration",
      "Option One Scalari3LTO",
      "Option Two Scalari3LTO",
      "Option Three Scalari3LTO"
    ]
  }
];

export default productOptions;
