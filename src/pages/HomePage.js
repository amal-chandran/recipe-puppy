import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select/creatable";
import { components } from "react-select";
import RecipeCard from "./../components/RecipeCard";
import classnames from "classnames";

const options = [
  { value: "Onion", label: "Onion" },
  { value: "Garlic", label: "Garlic" },
  { value: "vanilla", label: "Vanilla" }
];

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RecipeList: [],
      loaded: false
    };
  }

  handleSearch = () => {
    this.setState({ loaded: true });
    setTimeout(() => {
      this.setState({ RecipeList: new Array(1, 2, 3, 4) });
    }, 700);
  };

  render() {
    return (
      <div>
        <div className="header d-flex">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="headings">
              <h1>Recipe Search</h1>
              <div className="tag-line">
                Search engine to find recipes by their ingredients
              </div>
              <div
                onTransitionEnd={this.handleLoad}
                className={classnames("search-box", "d-flex", {
                  active: this.state.loaded
                })}
              >
                <Select
                  className="w-100"
                  styles={{
                    multiValueLabel: styles => ({}),
                    control: styles => ({
                      background: "none",
                      "&>div:first-child": {
                        padding: "2px 0px",
                        minHeight: "35px"
                      }
                    }),
                    placeholder: style => ({
                      position: "absolute",
                      paddingLeft: "12px"
                    }),
                    indicatorsContainer: style => ({ padding: "0px" }),
                    input: styles => ({
                      minWidth: "40px",
                      paddingLeft: "12px"
                    }),
                    multiValue: styles => ({
                      borderRadius: "100px",
                      padding: "5px 10px",
                      display: "flex",
                      background: "#c8c8c8",
                      color: "black",
                      marginLeft: "4px"
                    }),
                    multiValueRemove: styles => ({
                      margin: "-1px",
                      "& img": {
                        width: "19px",
                        marginLeft: "5px"
                      }
                    })
                  }}
                  isMulti={true}
                  isClearable={true}
                  components={{
                    DropdownIndicator: null,
                    ClearIndicator: null,
                    MultiValueRemove: props => (
                      <components.MultiValueRemove {...props}>
                        <img alt="Cross" src="/assets/cross.png" />
                      </components.MultiValueRemove>
                    )
                  }}
                  placeholder="Try: Onions, Garlic ..."
                  formatCreateLabel={val => `Add Ingredient "${val}"`}
                  options={options}
                />
                <button
                  onClick={this.handleSearch}
                  className="btn search-button"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="d-lg-flex d-none showcase-images">
              <img src="/assets/img-1.png" alt="Showcase" />
              <img src="/assets/img-2.png" alt="Showcase" />
              <img src="/assets/img-3.png" alt="Showcase" />
            </div>
          </div>
        </div>
        <div className="card-list container">
          <div className="row">
            {this.state.RecipeList.map(() => (
              <div className="col-md-6 col-lg-3 mb-4">
                <RecipeCard
                  handleDelete={data => e => {
                    console.log(data);
                  }}
                  data={{
                    title: "Vegetable-Pasta Oven Omelet",
                    thumbnail: "http://img.recipepuppy.com/560556.jpg",
                    ingredients: "tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper".split(
                      ","
                    )
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
