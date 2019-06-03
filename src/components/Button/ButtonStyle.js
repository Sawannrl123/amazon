import styled, { css } from "styled-components";
import { WHITE_COLOR, PRIMARY_COLOR, GRAY_COLOR } from '../../utils/globalConstants';

export const Button = css`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid ${PRIMARY_COLOR};
  color: ${PRIMARY_COLOR};
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 15px;
  transition: all .2s linear;
  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
  }
  ${props => props.primary && css`
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
    &:hover {
      background-color: transparent;
      color: ${PRIMARY_COLOR};
    }
  `}
  ${props => props.disabled && css`
    background-color: ${GRAY_COLOR};
    color: ${WHITE_COLOR};
    border-color: ${GRAY_COLOR};
    &:hover {
      background-color: ${GRAY_COLOR};
      color: ${WHITE_COLOR};
      border-color: ${GRAY_COLOR};
    }
  `}
`;

export const ButtonContainer = styled.button`
  ${Button}
`;