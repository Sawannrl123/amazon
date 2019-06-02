import React from "react";
import PropTypes from 'prop-types';

import {
  BannerContainer,
  BannerTitle,
  BannerSubTitle
} from './BannerStyle';

import {
  Container
} from '../common'

const Banner = ({ image, content }) => (
  <BannerContainer backgroundImage={image}>
    <Container>
      <BannerTitle>{content.title}</BannerTitle>
      <BannerSubTitle>{content.subtitle}</BannerSubTitle>
    </Container>
  </BannerContainer>
)

Banner.propTypes = {
  image: PropTypes.string,
  content: PropTypes.object
};

Banner.defaultProps = {
  image: '',
  content: {
    title: '',
    subtitle: ''
  }
};

export default Banner;