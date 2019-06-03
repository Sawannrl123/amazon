import styled from "styled-components";
import { Link } from "react-router-dom";

import { GRAY_COLOR, TEXT_COLOR, PRIMARY_COLOR } from "../../utils/globalConstants";

export const FooterContainer = styled.footer`
  margin-top: 2.77778rem;
  background: ${GRAY_COLOR};
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${TEXT_COLOR};
  padding: 10px 10px 0 0;
  display: block;
  font-size: 15px;
  &:hover {
    color: ${PRIMARY_COLOR}
  }
`;

export const FooterLinkList = styled.li`
  position: relative;
  margin-right: 10px;
  &:after {
    content: '|';
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 15px;
    color: ${TEXT_COLOR};
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  li {
    &:last-child {
      margin-right: 0;
      &:after {
        content: '';
      }
    }
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const FooterWrapper = styled.div`
  text-align: center;
  @media only screen and (min-width: 769px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    text-align: left;
  }
`;

export const FooterBoldText = styled.strong`
  font-size: 15px;
  color: ${TEXT_COLOR};
  &.app-name {
    padding: 10px 10px 0 0;
  }
`;

export const FooterCopyRight = styled.div`
  margin-top: 30px;
  @media only screen and (min-width: 769px) {
    flex: 0 0 250px;
    width: 250px;
  }
`;