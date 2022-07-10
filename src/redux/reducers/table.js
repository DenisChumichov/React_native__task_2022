import { UPDATE_COLUMNS_META } from '../types';

const initialState = {
  cars: [
    { id: '1', mark: 'Daewoo', model: 'Nexia', color: 'grey', type: 'sedan' },
    { id: '2', mark: 'Hyundai', model: 'Kona', color: 'white', type: 'CUV' },
    { id: '3', mark: 'VAZ', model: '2109', color: 'red', type: 'hatchback' },
    { id: '4', mark: 'Mercedes-benz', model: 'AMG GT', color: 'Silver', type: 'supercar' },
  ],
  columnsMeta: [
    { title: 'ID', isActive: true, type: 'id' },
    { title: 'Mark', isActive: true, type: 'mark' },
    { title: 'Model', isActive: true, type: 'model' },
    { title: 'Color', isActive: true, type: 'color' },
    { title: 'Type', isActive: true, type: 'type' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLUMNS_META: {
      return { ...state, columnsMeta: action.payload };
    }
    default:
      return state;
  }
};
