import React, { PureComponent } from "react";
import "./FormSearch.css";
import InputField from "../InputField/InputField";
import searchIcon from "../../img/search-icon.svg";
import classNames from "classnames";

class FormSearch extends PureComponent {
  render() {
    return (
      <form
        className={classNames("form-search", this.props.className)}
        onSubmit={this.props.onClick}
      >
        <InputField
          type="text"
          className="form-search__input"
          placeholder="Search"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <button
          className="form-search__button"
          onClick={this.props.onClick}
          type="button"
        >
          <img src={searchIcon} alt="Search" />
        </button>
      </form>
    );
  }
}
export default FormSearch;
