import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

export default class RecipeCard extends Component {
  render() {
    const { data, handleDelete } = this.props;
    return (
      <div class="card-custom">
        <div className="card-head">
          <h3>{data.title}</h3>
        </div>
        <div class="card-body">
          <div>INGREDIENTS</div>
          {data.ingredients.map(item => (
            <Chip
              label={item}
              onDelete={this.props.handleDelete(item)}
              color="primary"
            />
          ))}
        </div>
        <a className="card-footer" href="http://">
          VIEW RECIPE
          <img src="/assets/arrow.png" alt="Arrow" />
        </a>
      </div>
    );
  }
}
