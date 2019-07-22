import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { sendProdSelectionToRedux } from "../../../redux/actions/sendProdSelectionToRedux";

class SelectOptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configOption: ""
    };

    this.dropdownOptions = this.dropdownOptions.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSendToRedux = this.handleSendToRedux.bind(this);
  }

  ///////////////////////////////////
  handleSelectChange = (e) => {
    this.setState({ configOption: e.target.value });
  };

  handleSendToRedux = () => {
    this.props.sendProdSelectionToRedux(this.state.configOption);
  };

  dropdownOptions() {
    const { options } = this.props;

    return options.map((configOpt) => (
      <option key={configOpt} value={configOpt}>
        {configOpt}
      </option>
    ));
  }

  render() {
    // const { id } = this.props;

    // console.log(this.props.id);
    return (
      <div>
        <select
          /* id="indivProd" */
          onChange={this.handleSelectChange}
          onBlur={this.handleSendToRedux}
          value={this.state.configOption}
        >
          {this.dropdownOptions()}
        </select>
        <p>Value coming from state: {this.state.configOption}</p>
        <p>product id: {this.props.id}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  { sendProdSelectionToRedux }
)(SelectOptionComponent);
