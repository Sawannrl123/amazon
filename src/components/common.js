import styled, { css } from 'styled-components';
import { WHITE_COLOR } from '../utils/globalConstants';

export const Container = styled.section`
  max-width: 1280px;
  padding: ${props => props.padding ? props.padding : '1rem'};
  margin: 0 auto;
  width: 100%;
`;

export const SiteLink = css`
  padding: 7px 0;
  color: ${WHITE_COLOR};
  text-decoration: none;
  border-bottom: 2px solid transparent;
`;