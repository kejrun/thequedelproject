import {
  NEW_POST
 } from './types';

 export const makeNewPost = ({ prop, value }) => {
  return {
    type: NEW_POST,
    payload: { prop, value }
  };
};
