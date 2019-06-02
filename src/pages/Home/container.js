import { connect } from "react-redux";

import Home from "./Home";

import {
} from "../../actions/home/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
