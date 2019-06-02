import styled from "styled-components";
import { WHITE_COLOR, SHADOW, TEXT_COLOR } from '../../utils/globalConstants';
import { CustomScroller } from '../common';

export const PopupContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, .5);
`;

export const PopupBody = styled.div`
  background-color: ${WHITE_COLOR};
  box-shadow: ${SHADOW};
  border-radius: 3px;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  max-height: 100vh;
  width: 100%;
`;

export const PopupClose = styled.span`
  position: absolute;
  padding: 1rem;
  top: 0;
  right: 0;
  cursor: pointer;
  line-height: 1;
  font-size: 0;
`;

export const PopupContent = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  margin-top: 3rem;
  max-height: 85vh;
  overflow: auto;
  font-size: 15px;
  line-height: 1.5;
  color: ${TEXT_COLOR}
  ${CustomScroller};
`;