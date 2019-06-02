import styled, { css } from 'styled-components';
import { WHITE_COLOR, PRIMARY_COLOR } from '../utils/globalConstants';

export const Container = styled.section`
  max-width: 1280px;
  padding: ${props => props.padding ? props.padding : '1rem'};
  margin: 0 auto;
  width: 100%;
`;

export const PageContainer = styled.div`
`;

export const SiteLink = css`
  padding: 7px 0;
  color: ${WHITE_COLOR};
  text-decoration: none;
  border-bottom: 2px solid transparent;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Coloumn = styled.div`
  flex: ${props => props.col ? '1' : 'auto'};
  padding: 7px;
  width: ${props => props.col ? '100%' : 'auto'};
  @media only screen and (min-width: 769px) {
    flex: ${props => props.col ? `0 0 calc(100%/${props.col})` : 'auto'};
    width: ${props => props.col ? `calc(100%/${props.col})` : 'auto'};
  }
`;

export const CustomScroller = css`
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 3px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: ${PRIMARY_COLOR};
  }
`;