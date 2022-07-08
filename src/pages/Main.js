import React from 'react';
import { cars, activeColumns } from '../redux/selectors/table';
import { connect } from 'react-redux';

const Main = ({ cars, activeColumns }) => {
  return <></>;
};

const mapStateToProps = (state) => ({
  cars: cars(state),
  activeColumns: activeColumns(state),
});

export default connect(mapStateToProps)(Main);
