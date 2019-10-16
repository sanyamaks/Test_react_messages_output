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
        onSubmit=""
      >
        <InputField className="form-search__input" placeholder="Search" />
        <button className="form-search__button">
          <img src={searchIcon} alt="Search" />
        </button>
      </form>
    );
  }
}
export default FormSearch;
