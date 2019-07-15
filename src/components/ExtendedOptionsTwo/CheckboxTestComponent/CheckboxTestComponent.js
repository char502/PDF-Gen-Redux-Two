import React, { Component } from "react";
import CheckboxComponent from "../common/CheckboxComponent";
import SimpleCheckboxTestComponent from "./SimpleCheckboxTestComponent";
// import SimpleCustomProfessionalServicesSow from "./SimpleCustomProfessionalServicesSow";
// import InputComponent from "../inputComponent/inputComponent";

const CheckboxTestComponent = (props) => {
  return (
    <div>
      <CheckboxComponent
        label="Test Component"
        component={SimpleCheckboxTestComponent}
      />
    </div>
  );
};

export default CheckboxTestComponent;

// class CheckboxTestComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             checked: false
//         };
//         this.handleCheckBox = this.handleCheckBox.bind(this);
//     }

//     handleCheckBox(e) {
//         this.setState({ checked: !this.state.checked });
//     }

//     render() {
//         const content = this.state.checked ? (
//             <div>
//                 <SimpleCustomProfessionalServicesSow />
//             </div>
//         ) : null;

//         return (
//             <div>
//                 <div>
//                     <input
//                         type="checkbox"
//                         checked={this.state.checked}
//                         onChange={this.handleCheckBox}
//                     />
//                     <label>Custom Professional Services Sow</label>
//                 </div>
//                 {content}
//             </div>
//         );
//     }
// }

// export default TeradataCustomerSOW;
