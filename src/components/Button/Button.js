import React, { PureComponent } from "react";
import "./Button.css";
import searchIcon from "../../img/search-icon.svg";
import classNames from "classnames";

class Button extends PureComponent {
  render() {
    return (
      <button
        {...this.props}
        className={classNames("button", this.props.className)}
      >
        <img className={"button__icon"} src={searchIcon} alt="Search" />
      </button>
    );
  }
}
export default Button;
