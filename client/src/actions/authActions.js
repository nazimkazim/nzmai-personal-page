import { TEST_DISPATCH } from './type';

// REGISTER USER
export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
