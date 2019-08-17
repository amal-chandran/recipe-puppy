import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

import changeCase from "change-case";
export default class RecipeCard extends Component {
  render() {
    const { data } = this.props;
    const minIngredients = data.ingredients.slice(0, 5);

    return (
      <div class="card-custom ">
        <div className="card-head">
          <h3>{data.title}</h3>
        </div>
        <div class="card-body">
          <div>INGREDIENTS</div>
          {minIngredients.map(item => {
            item = changeCase.titleCase(item);
            return (
              <Chip
                className="m-1"
                label={item}
                onDelete={this.props.handleDelete(item)}
                color="primary"
              />
            );
          })}
          {data.ingredients.length > 5 ? (
            <a className="d-inline-block more-chips px-2 pt-2">{`and ${data
              .ingredients.length - 5} more...`}</a>
          ) : (
            ""
          )}
        </div>
        <a className="card-footer" href="http://">
          VIEW RECIPE
          <img src="/assets/arrow.png" alt="Arrow" />
        </a>
      </div>
    );
  }
}
