import React, { PureComponent } from "react";
import "./UserMessage.css";
import classNames from "classnames";

class UserMessage extends PureComponent {
  render() {
    return (
      <div className={classNames("user-message", this.props.className)}>
        <img
          className="user-message__user-avatar"
          src="https://randomuser.me/api/portraits/thumb/men/65.jpg"
          alt="Avatar"
        />
        <div className="user-message__info">
          <div className="user-message__name-and-time">
            <div className="user-message__user-name">{this.props.title}</div>
            <div className="user-message__sending-time">11:00 AM</div>
          </div>
          <div className="user-message__message-text">{this.props.body}</div>
        </div>
      </div>
    );
  }
}
export default UserMessage;
