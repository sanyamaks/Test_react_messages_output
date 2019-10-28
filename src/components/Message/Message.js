import React, { PureComponent } from "react";
import "./Message.css";
import classNames from "classnames";

class Message extends PureComponent {
  render() {
    const {className, message} = this.props;
    return (
      <div className={classNames("message", className)}>
        <img
          className="message__user-avatar"
          src="https://randomuser.me/api/portraits/thumb/men/65.jpg"
          alt="Avatar"
        />
        <div className="message__content">
          <div className="message__title-and-time">
            <div className="message__title">{message.title}</div>
            <div className="message__time">11:00 AM</div>
          </div>
          <div className="message__body">{message.body}</div>
        </div>
      </div>
    );
  }
}
export default Message;
