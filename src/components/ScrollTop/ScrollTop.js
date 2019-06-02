import React from "react";
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { WHITE_COLOR } from "../../utils/globalConstants";

import {
  ScrollTopContainer,
} from './ScrollTopStyle'

const ScrollTop = ({ onClick }) => (
  <ScrollTopContainer onClick={onClick}>
    <Icon name="arrow-up" color={WHITE_COLOR} size={18} />
  </ScrollTopContainer>
);

ScrollTop.propTypes = {
  onClick: PropTypes.func
}

export default ScrollTop;