import React, { Component } from "react";
import { APP_NAME, WHITE_COLOR } from "../../utils/globalConstants";

import {
  FooterContainer,
  FooterLink,
  FooterLinkList,
  FooterLinks,
  FooterWrapper,
  FooterBoldText,
  FooterCopyRight,
} from "./FooterStyle";

import { Container } from "../common";

class Footer extends Component {

  renderFooterLinks = () => {
    const { links } = this.props;
    if (links && links.length) {
      let linksItems = null;
      linksItems = links.map((link, index) => {
        return <FooterLinkList key={`link${index}`}>
          <FooterLink to={link.slug} onClick={() => this.props.linkClicked(link)}>{link.name}</FooterLink>
        </FooterLinkList>
      })
      return <FooterLinks>
        <FooterBoldText className="app-name">
          {APP_NAME.split(' ')[0]}
        </FooterBoldText>
        {linksItems}
      </FooterLinks>
    }

    return null;
  }

  renderFooter = () => {
    return <Container>
      <FooterWrapper>
        {this.renderFooterLinks()}
        <FooterCopyRight>
          <FooterBoldText>
            &copy; {APP_NAME.split(' ')[0]} 2012. All Rights Reserved
          </FooterBoldText>
        </FooterCopyRight>
      </FooterWrapper>
    </Container>
  }

  render() {
    return(
      <FooterContainer>
        {this.renderFooter()}
      </FooterContainer>
    )
  }
}

export default Footer;
