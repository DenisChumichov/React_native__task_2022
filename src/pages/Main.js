import React, { useState } from 'react';
import { cars, columnsMeta } from '../redux/selectors/table';
import { connect } from 'react-redux';
import Table from '../components/Table';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import ChooseColumnsModal from '../components/ChooseColumnsModal';
import { updateColumnsMeta } from '../redux/actions/table';

const Main = ({ cars, columnsMeta, updateColumnsMeta }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [columnsData, setColumnsData] = useState(columnsMeta);

  const filteredColumnsMeta = columnsData.filter((item) => item.isActive);
  const activeTypes = filteredColumnsMeta.map((item) => item.type);
  const filteredContent = cars
    .filter((item) => !item.isActive)
    .map((item) =>
      Object.fromEntries(Object.entries(item).filter(([key]) => activeTypes.includes(key)))
    );

  const onApply = () => {
    updateColumnsMeta(columnsData);
    setIsModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cars Table</Text>
        <Button
          title="Select Grid Columns"
          color={'green'}
          onPress={() => {
            setColumnsData(columnsMeta);
            setIsModalVisible(true);
          }}
        />
      </View>
      <Table content={filteredContent} columnsMeta={filteredColumnsMeta} />
      <ChooseColumnsModal
        visible={isModalVisible}
        onApply={onApply}
        columnsData={columnsData}
        setColumnsData={setColumnsData}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  cars: cars(state),
  columnsMeta: columnsMeta(state),
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});

export default connect(mapStateToProps, { updateColumnsMeta })(Main);
