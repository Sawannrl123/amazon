import { connect } from "react-redux";

import Connect from "./Connect";

import {
} from "../../actions/connect/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.connect,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connect);
