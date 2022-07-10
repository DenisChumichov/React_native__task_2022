export const tableDataConverter = (data) => data.map((row) => Object.values(row));

export const searchAtList = (array, searchText) => {
  return array.filter((item) => {
    if (String(item.title).toUpperCase().includes(searchText.toUpperCase())) {
      return item;
    }
  });
};
