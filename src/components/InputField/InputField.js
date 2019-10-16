import React, { PureComponent } from "react";
import "./InputField.css";
import classNames from "classnames";

class InputField extends PureComponent {
  render() {
    return (
      <input
        {...this.props}
        className={classNames("input-field", this.props.className)}
      />
    );
  }
}
export default InputField;
