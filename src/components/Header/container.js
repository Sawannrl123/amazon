import { connect } from "react-redux";

import Header from "./Header";

import {
  changeMenu
} from "../../actions/header/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.header,
  ...state.main
});

const mapDispatchToProps = dispatch => ({
  changeMenu: (menu) => dispatch(changeMenu(menu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
