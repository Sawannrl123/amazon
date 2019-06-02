import styled from "styled-components";
import { SHADOW, PRIMARY_COLOR } from '../../utils/globalConstants';

export const ScrollTopContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  padding: 10px;
  background-color: ${PRIMARY_COLOR};
  box-shadow: ${SHADOW};
  font-size: 0;
  line-height: 1;
  cursor: pointer;
`;