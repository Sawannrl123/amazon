import * as actions from "../actions/suggestionBox/actionTypes";
import { User } from '../images'

const userList = [
  {
    image: User,
    name: 'Philen Gautam',
    email: 'philen@comcast.net',
    id: 'user01'
  },
  {
    image: User,
    name: 'Thrymm Sharma',
    email: 'thrymm@gmail.com',
    id: 'user02'
  },
  {
    image: User,
    name: 'Staffelb Jain',
    email: 'staffelb@sbcglobal.net',
    id: 'user03'
  },
  {
    image: User,
    name: 'Kludge Kumar',
    email: 'kludge@comcast.net',
    id: 'user04'
  },
  {
    image: User,
    name: 'Stern Agarwal',
    email: 'stern@icloud.com',
    id: 'user05'
  },
  {
    image: User,
    name: 'Firstpr Singh',
    email: 'firstpr@att.net',
    id: 'user06'
  },
  {
    image: User,
    name: 'Claesjac Rathore',
    email: 'claesjac@icloud.com',
    id: 'user07'
  },
  {
    image: User,
    name: 'Andale Shekhawat',
    email: 'andale@sbcglobal.net',
    id: 'user08'
  },
  {
    image: User,
    name: 'Wortmanj Banna',
    email: 'wortmanj@live.com',
    id: 'user09'
  },
  {
    image: User,
    name: 'Keutzer Saha',
    email: 'keutzer@yahoo.com',
    id: 'user10'
  },
  {
    image: User,
    name: 'Msherr Joe',
    email: 'msherr@verizon.net',
    id: 'user11'
  },
  {
    image: User,
    name: 'Chaki Modi',
    email: 'chaki@live.com',
    id: 'user12'
  },
  {
    image: User,
    name: 'Metzzo Kejeriwal',
    email: 'metzzo@att.net',
    id: 'user13'
  },
  {
    image: User,
    name: 'Staikos Vishwas',
    email: 'staikos@yahoo.ca',
    id: 'user14'
  },
  {
    image: User,
    name: 'Arebenti Sisodiya',
    email: 'arebenti@yahoo.ca',
    id: 'user15'
  },
  {
    image: User,
    name: 'Singh Manmohan',
    email: 'singh@mac.com',
    id: 'user16'
  }
];

const initialState = {
  userLists: userList,
  addedUserList: [],
  showUsersList: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_ADDED:
      return {
        ...state,
        addedUserList: [...state.addedUserList, action.user]
      };
    case actions.USER_REMOVED:
      return {
        ...state,
        addedUserList: state.addedUserList.filter((item, index) => index !== action.index)
      };
    case actions.SHOW_USERS_LIST:
      return {
        ...state,
        showUsersList: action.status
      };
    default:
      return state;
  }
};
