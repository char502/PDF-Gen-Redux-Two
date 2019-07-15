import React, { Component } from "react";
import CheckboxComponent from "../common/CheckboxComponent";
import SimpleCustomProfessionalServicesSow from "./SimpleCustomProfessionalServicesSow";

const CustomProfessionalServicesSow = () => {
  return (
    <div>
      <CheckboxComponent
        label="Custom Professional Services SOW"
        component={SimpleCustomProfessionalServicesSow}
      />
    </div>
  );
};

export default CustomProfessionalServicesSow;

// import React, { Component } from "react";
// import SimpleCustomProfessionalServicesSow from "./SimpleCustomProfessionalServicesSow";
// // import InputComponent from "../inputComponent/inputComponent";

// class TeradataCustomerSOW extends Component {
//   constructor() {
//     super();
//     this.state = {
//       checked: false
//     };
//     this.handleCheckBox = this.handleCheckBox.bind(this);
//   }

//   handleCheckBox(e) {
//     this.setState({ checked: !this.state.checked });
//   }

//   render() {
//     const content = this.state.checked ? (
//       <div>
//         <SimpleCustomProfessionalServicesSow />
//       </div>
//     ) : null;

//     return (
//       <div>
//         <div>
//           <input
//             type="checkbox"
//             checked={this.state.checked}
//             onChange={this.handleCheckBox}
//           />
//           <label>Custom Professional Services Sow</label>
//         </div>
//         {content}
//       </div>
//     );
//   }
// }

// export default TeradataCustomerSOW;

// export default class ChildComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false
//     };
//   }

//   onCheck = (e) => {
//     this.setState({ show: true });
//   };

//   render() {
//     const showYes = (
//       <div>
//         <InputComponent />
//         <InputComponent />
//         <InputComponent />
//       </div>
//     );
//     const noShow = (
//       <div>
//         <input type="checkbox" onChange={this.onCheck}></input>
//       </div>
//     );
//     const { show } = this.state;

//     return <div>{show ? showYes : noShow}</div>;
//   }
// }
