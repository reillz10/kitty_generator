import { UPDATE_NAME } from '../constants/actionTypes/kitty';

const kitty = (state = { name: '' }, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default kitty;

