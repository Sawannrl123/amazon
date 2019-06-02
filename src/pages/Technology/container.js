import { connect } from "react-redux";

import Technology from "./Technology";

import {
} from "../../actions/technology/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.technology,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Technology);
