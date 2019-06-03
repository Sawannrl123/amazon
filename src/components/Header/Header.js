import React, { Component } from "react";

import { Loading } from "../Loading";
import { APP_NAME, WHITE_COLOR } from "../../utils/globalConstants";

import Icon from "../Icon";

import {
  HeaderContainer,
  HeaderWrapper,
  Menus,
  Menu,
  LogoLink,
  Logo,
  SubLogo,
  MenuLink,
  MobileMenu,
  MenuContainer,
  MenuClose
} from "./HeaderStyle";

import { Container } from "../common";

class Header extends Component {
  changeMenu = menu => {
    const { dimension } = this.props;
    const { width } = dimension;
    this.props.changeMenu(menu);
    if (width < 769) this.props.toggleMobileMenu();
  };

  renderMenu = () => {
    const { menus, dimension, mobileMenuState } = this.props;
    const { width } = dimension;
    let mobileMenuClass = null;
    let closeIcon = null;
    const menuItems = menus.map(menu => {
      const { title, slug } = menu;
      return (
        <Menu key={`menu_${slug}`}>
          <MenuLink
            exact={slug === "/" ? true : false}
            activeClassName="is-active"
            to={slug === "/" ? "/" : `/${slug}`}
            onClick={() => this.changeMenu(menu)}
          >
            {title}
          </MenuLink>
        </Menu>
      );
    });

    if (width < 769) {
      mobileMenuClass = "mobile-menu";
      closeIcon = (
        <MenuClose onClick={this.props.toggleMobileMenu} key="close">
          <Icon name="close" color={WHITE_COLOR} size={24} />
        </MenuClose>
      );
    }

    let menu = [];

    if (mobileMenuState) {
      menu = [
        <Menus key="menus">
          {closeIcon}
          {menuItems}
        </Menus>
      ];
    }

    if (width > 768) {
      menu = [<Menus key="menus">{menuItems}</Menus>];
    }

    if (width < 769) {
      menu.push(
        <MobileMenu onClick={this.props.toggleMobileMenu} key="menu">
          <Icon name="menu" color={WHITE_COLOR} size={24} />
        </MobileMenu>
      );
    }

    return <MenuContainer className={mobileMenuClass}>{menu}</MenuContainer>;
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
