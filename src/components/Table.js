import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table as BaseTable, Row, Rows } from 'react-native-table-component';
import { tableDataConverter, upperFirstSymbol } from '../services/utils';

const Table = ({ content, activeColumns }) => {
  return (
    <BaseTable borderStyle={styles.borderStyle}>
      <Row
        data={activeColumns.map((item) => upperFirstSymbol(item))}
        style={styles.head}
        textStyle={[styles.headText, styles.text]}
      />
      <Rows data={tableDataConverter(content)} style={styles.body} textStyle={styles.text} />
    </BaseTable>
  );
};

const styles = StyleSheet.create({
  borderStyle: {
    borderWidth: 2,
    borderColor: 'black',
  },
  head: {
    backgroundColor: '#8cd49f',
    height: 40,
  },
  body: {
    height: 40,
  },
  headText: {
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
  },
});

export default Table;
