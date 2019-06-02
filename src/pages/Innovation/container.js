import { connect } from "react-redux";

import Innovation from "./Innovation";

import {
  togglePopup,
  submitQuery
} from "../../actions/innovation/action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.innovation,
  ...state.main,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: (popupData) => dispatch(togglePopup(popupData)),
  submitQuery: (contactData) => dispatch(submitQuery(contactData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Innovation);
