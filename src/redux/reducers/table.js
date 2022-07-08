const initialState = {
  cars: [
    { id: '1', mark: 'Daewoo', model: 'Nexia', color: 'grey', type: 'sedan' },
    { id: '2', mark: 'Hyundai', model: 'Kona', color: 'white', type: 'CUV' },
    { id: '3', mark: 'VAZ', model: '2109', color: 'red', type: 'hatchback' },
    { id: '4', mark: 'Mercedes-benz', model: 'AMG GT', color: 'Silver', type: 'supercar' },
  ],
  activeColumns: ['id', 'mark', 'model', 'color', 'type'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
