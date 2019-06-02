import styled from "styled-components";
import { Link } from "react-router-dom";
import { TEXT_COLOR, PRIMARY_COLOR } from '../../utils/globalConstants';

export const BreadcrumContainer = styled.div`
  padding: 1rem;
  color: ${TEXT_COLOR};
  display: flex;
  align-items: center;
`;

export const BreadcrumLink = styled(Link)`
  color: ${PRIMARY_COLOR};
  text-decoration: none;
  font-size: 15px;
  &:hover {
    opacity: .9;
  }
`;

export const BreadcrumTag = styled.span`
  display: flex;
  align-items: center;
  
`;

export const Tag = styled.span`
  font-size: 15px;
  text-transform: capitalize;
`;