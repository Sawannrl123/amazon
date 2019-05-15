import React, { Component } from "react";
import ClickOutside from "react-simple-click-outside";
import { Remove } from "../../images";
import "./SuggestionBox.css";

class SuggestionBox extends Component {
  state = {
    searchString: "",
    highlight: false,
    removeUser: false
  };

  addUser = (e, user) => {
    e.preventDefault();
    const { addedUserList } = this.props;
    this.resetHighlight(false);
    if (!addedUserList.includes(user)) {
      this.setState({
        searchString: "",
        removeUser: false
      }, () => {
        this.props.addUser(user);
      });
    } else {
      alert("You have already added this user. Please choose different one");
    }
  };

  removeUser = (e, index) => {
    e.preventDefault();
    this.setState(
      {
        removeUser: true
      },
      () => {
        this.props.removeUser(index);
      }
    );
  };

  handleChange = e => {
    this.setState({
      searchString: e.target.value,
      removeUser: false
    });
  };

  resetHighlight = val => {
    this.setState({
      highlight: val
    });
  };

  closeSuggestions = () => {
    const { showUsersList } = this.props;
    const { removeUser } = this.state;
    if (showUsersList && !removeUser) this.props.showSuggestionList(false);
  };

  checkBlank = e => {
    const { searchString, highlight } = this.state;
    const { addedUserList, removeUser } = this.props;
    const key = e.which || e.keyCode;
    if (addedUserList && addedUserList.length) {
      if (!searchString && key === 8 && !highlight) {
        this.resetHighlight(true);
      } else if (!searchString && key === 8 && highlight) {
        this.setState({
          removeUser: false
        }, () => {
          removeUser(addedUserList.length - 1);
        });
      }
    }
  };

  renderSuggestionList = () => {
    const { userLists, showUsersList } = this.props;
    const { searchString } = this.state;

    if (showUsersList) {
      const lists = userLists
        .filter(list => {
          const { name } = list;
          return (
            name
              .toLocaleLowerCase()
              .indexOf(searchString.trim().toLocaleLowerCase()) !== -1
          );
        })
        .map(list => {
          const { name, image, email, id } = list;
          return (
            <li
              onClick={e => this.addUser(e, list)}
              key={`list${id}`}
              className="suggestion-list"
            >
              <span className="suggestion-list-image">
                <img src={image} alt={name} />
              </span>
              <span className="suggestion-list-name">
                {name}
              </span>
              <span className="suggestion-list-email">{email}</span>
            </li>
          );
        });
      return <ul className="suggestion-list-container">{lists}</ul>;
    }

    return null;
  };

  renderSearchInput = () => {
    const { searchString } = this.state;
    return (
      <input
        type="text"
        value={searchString}
        onChange={this.handleChange}
        onFocus={() => this.props.showSuggestionList(true)}
        className="suggestion-input"
        ref={input => (this.search = input)}
        onKeyDown={this.checkBlank}
        placeholder="Search"
      />
    );
  };

  renderChips = () => {
    const { addedUserList } = this.props;
    const { highlight } = this.state;

    if (addedUserList && addedUserList.length) {
      return addedUserList.map((list, index) => {
        const { name, image, id } = list;
        let chipClass = "suggestion-chip";
        if (addedUserList.length - 1 === index) {
          chipClass = highlight
            ? "suggestion-chip highlight"
            : "suggestion-chip";
        }
        return (
          <div key={`chip${id}`} className={chipClass}>
            <span className="suggestion-chip-image">
              <img src={image} alt={name} />
            </span>
            <span className="suggestion-chip-name">{name}</span>
            <span
              onClick={e => this.removeUser(e, index)}
              className="suggestion-chip-remove"
              title="Remove"
            >
              <img src={Remove} alt="remove" />
            </span>
          </div>
        );
      });
    }

    return null;
  };

  renderInputWithList = () => {
    return (
      <div className="suggestion-input-with-list">
        {this.renderSearchInput()}
        {this.renderSuggestionList()}
      </div>
    );
  };

  renderChildren = () => {
    return (
      <div className="suggestion-wrapper" onClick={() => this.search.focus()}>
        {this.renderChips()}
        {this.renderInputWithList()}
      </div>
    );
  };

  render() {
    return (
      <ClickOutside close={this.closeSuggestions}>
        <div className="suggestion-container">{this.renderChildren()}</div>
      </ClickOutside>
    );
  }
}

export default SuggestionBox;
