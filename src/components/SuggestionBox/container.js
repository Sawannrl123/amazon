import { connect } from "react-redux";

import SuggestionBox from "./SuggestionBox";

import {
  showSuggestionList,
  addUser,
  removeUser
} from "../../actions/suggestionBox/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.suggestionBox
});

const mapDispatchToProps = dispatch => ({
  showSuggestionList : (status) => dispatch(showSuggestionList(status)),
  addUser: (user) => dispatch(addUser(user)),
  removeUser: (index) => dispatch(removeUser(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionBox);
