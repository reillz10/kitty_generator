import { UPDATE_NAME } from '../constants/actionTypes/kitty';

const updateName = name => (
  {
    type: UPDATE_NAME,
    name,
  }
);

export { updateName };
