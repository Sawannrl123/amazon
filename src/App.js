import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import { updateDimensions } from './actions/main/action'

import { Header } from "./components";


class App extends Component {

  updateDimensions = () => {
    const dimension = {
      width: window.innerWidth, 
      height: window.innerHeight
    }
    this.props.updateDimensions(dimension);
  }

  componentWillMount = () => {
    this.updateDimensions();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <Header />
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.app
});

const mapDispatchToProps = dispatch => ({
  updateDimensions: (dimension) => dispatch(updateDimensions(dimension))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
