import React, { PureComponent } from "react";
import "./SearchForm.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import classNames from "classnames";

class SearchFrom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.value);
  };
  render() {
    return (
      <form
        className={classNames("form-search", this.props.className)}
        onSubmit={this.onSubmit}
      >
        <InputField
          type="text"
          className="form-search__input"
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.value}
        />
        <Button
          className="form-search__button"
          onClick={this.onSubmit}
          type="button"
        />
      </form>
    );
  }
}
export default SearchFrom;
