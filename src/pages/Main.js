import React from 'react';
import { cars, activeColumns } from '../redux/selectors/table';
import { connect } from 'react-redux';
import Table from '../components/Table';
import { ScrollView, StyleSheet, View } from 'react-native';

const Main = ({ cars, activeColumns }) => {
  return (
    <ScrollView style={styles.container}>
      <Table content={cars} activeColumns={activeColumns} />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  cars: cars(state),
  activeColumns: activeColumns(state),
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default connect(mapStateToProps)(Main);
