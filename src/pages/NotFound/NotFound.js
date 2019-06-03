import React, { Component } from 'react';

import {
  PageContainer,
  CenterElement
} from "../../components/common";

import {
  Error404
} from '../../images'

class NotFound extends Component {
  render() {
    return <PageContainer>
      <CenterElement fullHeight>
        <img src={Error404} alt="Page Not Found" />
      </CenterElement>
    </PageContainer>
  }
}

export default NotFound;