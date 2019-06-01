import React, { Component } from "react";

import { Loading } from "../Loading";
import { APP_NAME } from "../../utils/globalConstants";

import {
  HeaderContainer,
  HeaderWrapper,
  Menus,
  Menu,
  LogoLink,
  Logo,
  SubLogo,
  MenuLink
} from "./HeaderStyle";

import { Container } from "../common";



class Header extends Component {
  
  renderMenu = () => {
    const { menus, dimension } = this.props;
    const { width } = dimension; 
    const menuItems = menus.map(menu => {
      const { title, slug } = menu;
      return (
        <Menu key={`menu_${slug}`}>
          <MenuLink
            exact={slug === "home" || '/' ? true : false}
            activeClassName="is-active"
            to={slug === "home" ? "/" : `/${slug}`}
            onClick={() => this.props.changeMenu(menu)}
          >
            {title}
          </MenuLink>
        </Menu>
      );
    });

    if (width > 768) {
      return <Menus>{menuItems}</Menus>;
    }

    return (
      <div>Sawan</div>
    )
    
  };

  renderLogo = () => {
    const appLogo = APP_NAME.split(" ");
    return (
      <LogoLink to="/">
        <Logo>{appLogo[0]}</Logo>
        <SubLogo>{appLogo[1]}</SubLogo>
      </LogoLink>
    );
  };

  renderHeader = () => {
    return (
      <Container padding="0 1rem">
        <HeaderWrapper>
          {this.renderLogo()}
          {this.renderMenu()}
        </HeaderWrapper>
      </Container>
    );
  };

  render() {
    const { menus } = this.props;

    if (!menus && !menus.length) {
      return <Loading>Loading...</Loading>;
    }

    return <HeaderContainer>{this.renderHeader()}</HeaderContainer>;
  }
}

export default Header;
