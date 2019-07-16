import React, { Component } from "react";

class SimpleCheckboxTestComponent extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="form-label">
          This is the SimpleCheckboxTest Component
        </label>
        <textarea
          className="form-control"
          rows={3}
          type="text"
          placeholder="Enter text here"
        />
      </div>
    );
  }
}

export default SimpleCheckboxTestComponent;
