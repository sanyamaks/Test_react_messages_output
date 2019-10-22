import React, { PureComponent } from "react";
import "./Header.css";
import FormSearch from "../SearchForm/SearchFrom";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header__background">
          <div className="header__headline">
            <div className="header__name">Messages</div>
            <div className="header__unread-messages">137</div>
          </div>
          <FormSearch
            className="header__form-search"
            search={this.props.search}
          />
        </div>
      </header>
    );
  }
}
export default Header;
