// export default CustomerInformation;
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { textArea } from "../redux/actions/textArea";

class CustomerInformation extends Component {
  constructor() {
    super();
    this.state = {
      textArea: ""
    };
  }
  handleChange = (e) => {
    this.setState({ textArea: e.target.value });
  };

  sendData = () => {
    this.props.textArea(this.state.textArea);
  };
  render() {
    const { title, rows, resize, name, placeholder } = this.props;
    return (
      <div className="form-group">
        <label className="form-label">{title}</label>
        <textarea
          className="form-control"
          rows={rows}
          style={resize ? null : { resize: "none" }}
          name={name}
          value={this.state.textArea}
          onChange={this.handleChange}
          placeholder={placeholder}
          onBlur={this.sendData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  { textArea }
)(CustomerInformation);

// const CustomerInformation = props => {
//   // console.log(props);
//   return (
//     <div className="form-group">
//       <label className="form-label">{props.title}</label>
//       <textarea
//         className="form-control"
//         rows={props.rows}
//         style={props.resize ? null : { resize: "none" }}
//         name={props.name}
//         value={props.value}
//         onChange={props.handleChange}
//         placeholder={props.placeholder}
//       />
//     </div>
//   );
// };
