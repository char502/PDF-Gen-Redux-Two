import React, { Component } from "react";
import SimpleTeradataComponent from "./SimpleTeradataComponent";
// import InputComponent from "../inputComponent/inputComponent";

class TeradataCustomerSOW extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const content = this.state.checked ? (
      <div>
        <SimpleTeradataComponent />
      </div>
    ) : null;

    return (
      <div>
        <div className="checkbox-group">
          <label>
            <input
              className="form-checkbox"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckBox}
            />
            Teradata Customer SOW
            {content}
          </label>
        </div>
      </div>
    );
  }
}

export default TeradataCustomerSOW;

// import React, { Component } from "react";
// import CheckboxComponent from "../common/CheckboxComponent";
// import SimpleTeradataComponent from "./SimpleTeradataComponent";

// const TeradataCustomerSOW = () => {
//     return (
//         <div>
//             <CheckboxComponent
//                 label="Teradata Customer SOW"
//                 component={SimpleTeradataComponent}
//             />
//         </div>
//     );
// };

// export default TeradataCustomerSOW;

/////////////////////////////////////////////////////////////////////////////

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
