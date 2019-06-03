import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import {
  BodyContainer
} from './AppStyle';

import { updateDimensions, handleScroll } from './actions/main/action'

import { Header, ScrollTop, Footer } from "./components";
import { Home, Innovation, Connect, Technology, NotFound } from './pages';


class App extends Component {

  updateDimensions = () => {
    const dimension = {
      width: window.innerWidth, 
      height: window.innerHeight
    }
    this.props.updateDimensions(dimension);
  }

  handleScroll = () => {
    this.props.handleScroll(window.scrollY);
  };

  componentWillMount = () => {
    this.updateDimensions();
    this.handleScroll();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <Router>
        <Header />
        <BodyContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/innovation" component={Innovation} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/connect" component={Connect} />
            <Route component={NotFound} />
          </Switch>
        </BodyContainer>
        <Footer />
        {this.props.scrollY > 100 ? <ScrollTop onClick={this.scrollToTop}/> : null}
      </Router>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.main
});

const mapDispatchToProps = dispatch => ({
  updateDimensions: (dimension) => dispatch(updateDimensions(dimension)),
  handleScroll: (scrollY) => dispatch(handleScroll(scrollY)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
