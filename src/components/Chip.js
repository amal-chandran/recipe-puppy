import React, { Component } from "react";

export default class Chip extends Component {
  render() {
    return (
      <div>
        <div>{data.label}</div>
        <div className="btn-contain">
          <button>
            <img src="/assets/cross.png" alt="Cross" />
          </button>
        </div>
      </div>
    );
  }
}
