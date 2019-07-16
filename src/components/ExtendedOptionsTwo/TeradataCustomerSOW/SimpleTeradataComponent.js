import React, { Component } from "react";

class SimpleTeradataComponent extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="form-label">
          This is the TeradataExtOptions component
        </label>
        {/* This is a test of Simple Teradata Component */}
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

export default SimpleTeradataComponent;
