export const tableDataConverter = (data) => data.map((row) => Object.values(row));

export const upperFirstSymbol = (str) => str[0].toUpperCase() + str.slice(1);
