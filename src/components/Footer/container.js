import { connect } from "react-redux";

import Footer from "./Footer";

import {
  linkClicked,
} from "../../actions/footer/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.footer,
});

const mapDispatchToProps = dispatch => ({
  linkClicked: (link) => dispatch(linkClicked(link)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
