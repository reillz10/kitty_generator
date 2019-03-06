import kitty from './kitty';
import { UPDATE_NAME } from '../constants/actionTypes/kitty';

const initialState = {
  name: '',
};

describe('kitty reducer', () => {
  it('state is updated when calling the updateName method', () => {
    expect(kitty(initialState, { type: UPDATE_NAME, name: 'George' })).toEqual({ name: 'George' });
  });
});
