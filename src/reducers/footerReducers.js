import * as actions from "../actions/footer/actionTypes";

const links = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'Carrers',
    slug: '/carrers'
  },
  {
    name: 'Innovation Stories',
    slug: '/innovation'
  },
  {
    name: 'HSGS Search',
    slug: '/hsgs-search'
  },
  {
    name: 'Textbook Information Search',
    slug: '/textbook-information-search'
  },
  {
    name: 'A-Z Product Index',
    slug: '/a-z-product-index'
  },
  {
    name: 'Connect 3M',
    slug: '/connect'
  },
  {
    name: 'Legal Information',
    slug: '/legal-information'
  },
  {
    name: 'Privacy Policy',
    slug: '/privacy-policy'
  },
];

const initialState = {
  links,
  activeLink: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LINK_CLICKED:
      return {
        ...state,
        activeLink: action.link
      };
    default:
      return state;
  }
};