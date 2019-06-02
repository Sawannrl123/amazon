import React from "react";
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { TEXT_COLOR } from "../../utils/globalConstants";

import {
  PopupContainer,
  PopupOverlay,
  PopupBody,
  PopupClose,
  PopupContent,
} from './PopupStyle'

const Popup = ({ children, closePopup }) => (
  <PopupContainer>
    <PopupOverlay onClick={closePopup}></PopupOverlay>
    <PopupBody>
      <PopupClose onClick={closePopup}>
        <Icon name="close" color={TEXT_COLOR} size={18} />
      </PopupClose>
      <PopupContent>
        {children}
      </PopupContent>
    </PopupBody>
  </PopupContainer>
);

Popup.propTypes = {
  closePopup: PropTypes.func,
  children: PropTypes.node,
}

export default Popup;