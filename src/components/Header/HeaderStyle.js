import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BOTTOM_SHADOW, PRIMARY_COLOR, WHITE_COLOR } from "../../utils/globalConstants";
import { SiteLink } from "../common";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${BOTTOM_SHADOW};
  background-color: ${PRIMARY_COLOR};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menus = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Menu = styled.li`
  padding: 0 7px;
`;

export const LogoLink = styled(NavLink)`
  ${SiteLink}
  display: flex;
  align-items: flex-end;
`;

export const MenuLink = styled(NavLink)`
  ${SiteLink}
  padding: 1rem 0;
  display: block;
  margin-bottom: 1px;
  &:hover,
  &.is-active {
    border-color: ${WHITE_COLOR};
    opacity: 0.9;
  }
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 5px;
`;

export const SubLogo = styled.span`
  font-size: 20px;
  font-style: italic;
`;
