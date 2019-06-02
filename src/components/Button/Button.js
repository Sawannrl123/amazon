import React from "react";
import PropTypes from 'prop-types';

import {
  ButtonContainer
} from './ButtonStyle'

const Button = ({ children, onClick, ...others }) => (
  <ButtonContainer onClick={onClick} {...others}>
    {children}
  </ButtonContainer>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button;