import React from "react";
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { TEXT_COLOR } from "../../utils/globalConstants";

import {
  BreadcrumContainer,
  BreadcrumLink,
  BreadcrumTag,
  Tag
} from './BreadcrumStyle'

const Breadcrum = ({path}) => {
  let breadcrumPath = [
    <span key="home">Home</span>
  ]
  if (path !== '/') {
    const splitPath = path.split('/');
    breadcrumPath = [<BreadcrumLink key="home" to="/">Home</BreadcrumLink>]
    const filteredPath = splitPath.filter((item, index) => {
      return index%2 !== 0;
    })
    
    filteredPath.map((item, index) => {
      let pushItem = null;
      if(filteredPath.length - 1 === index) {
        pushItem = <BreadcrumTag key={item}>
          <Icon name="right-arrow" color={TEXT_COLOR} size={18} />
          <Tag>{item}</Tag>
        </BreadcrumTag>
      } else {
        pushItem = <BreadcrumTag key={item}>
          <Icon name="right-arrow" color={TEXT_COLOR} size={24} />
          <BreadcrumLink to={`/${item}`}>item</BreadcrumLink>
        </BreadcrumTag>
      }
      breadcrumPath.push(pushItem)
    })
  }
  return (
    <BreadcrumContainer>
      {breadcrumPath}
    </BreadcrumContainer>
  )
}

Breadcrum.propTypes = {
  path: PropTypes.string
}

export default Breadcrum;