import styled from "styled-components";

import { WHITE_COLOR } from '../../utils/globalConstants'

export const BannerContainer = styled.section`
  min-height: 50vh;
  background-color: rgba(219, 112, 147, .5);
  background-image: url(${props => props.backgroundImage ? props.backgroundImage : null});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BannerTitle = styled.h1`
  color: ${WHITE_COLOR};
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 1rem;
  @media only screen and (min-width: 769px) {
    font-size: 36px;
  }
`;

export const BannerSubTitle = styled.p`
  color: ${WHITE_COLOR};
  font-size: 15px;
  line-height: 1.5;
  @media only screen and (min-width: 769px) {
    font-size: 18px;
  }
`;