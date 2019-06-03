import React, { Component } from 'react';

import {
  PageContainer,
  CenterElement,
  PageInfo,
  PageTitle,
  PageSubtitle,
  PageLink
} from "../../components/common";

class Connect extends Component {
  render() {
    return <PageContainer>
      <CenterElement fullHeight>
        <PageInfo>
          <PageTitle>Connect Page</PageTitle>
          <PageSubtitle>Innovation Page is you destination. Please take a look.</PageSubtitle>
          <PageLink to="/innovation">Innovation Page</PageLink>
        </PageInfo>
      </CenterElement>
    </PageContainer>
  }
}

export default Connect;