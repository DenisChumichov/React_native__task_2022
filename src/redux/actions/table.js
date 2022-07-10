import { UPDATE_COLUMNS_META } from '../types';

export const updateColumnsMeta = (data) => {
  return {
    type: UPDATE_COLUMNS_META,
    payload: data,
  };
};
