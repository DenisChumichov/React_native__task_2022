import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import close from '../assets/cross.png';
import { searchAtList } from '../services/utils';

const ChooseColumnsModal = ({ visible, onApply, columnsData, setColumnsData }) => {
  const [searchText, setSearchText] = useState('');

  const onChoose = (item) => {
    if (!item.isActive) {
      setColumnsData((state) =>
        state.map((col) => {
          if (col.type === item.type) {
            return { ...col, isActive: true };
          }
          return col;
        })
      );
    }
  };

  const onDelete = (item) => {
    setColumnsData((state) =>
      state.map((col) => {
        if (col.type === item.type) {
          return { ...col, isActive: false };
        }
        return col;
      })
    );
  };

  return (
    <Modal visible={visible} transparent>
      <ScrollView style={styles.modal}>
        <Text style={styles.title}>Select columns for the grid (one minimum)</Text>
        <TextInput placeholder="Search" value={searchText} onChangeText={setSearchText} />
        <View style={styles.listContainer}>
          <View style={styles.columnsList}>
            {searchAtList(columnsData, searchText).map((item) => (
              <TouchableOpacity
                key={item.type}
                style={styles.columnContainer}
                onPress={() => onChoose(item)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.divider} />
          <View style={styles.columnsList}>
            {columnsData.map((item) => {
              if (item.isActive)
                return (
                  <View key={item.type} style={styles.columnContainer}>
                    <Text>{item.title}</Text>
                    {columnsData.filter((item) => item.isActive).length > 1 && (
                      <TouchableOpacity onPress={() => onDelete(item)}>
                        <Image source={close} />
                      </TouchableOpacity>
                    )}
                  </View>
                );
            })}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.applyContainer}>
            <Button title="apply" color={'green'} onPress={onApply} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    backgroundColor: 'white',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  columnsList: {
    width: '50%',
  },
  columnContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: 'grey',
    height: '100%',
  },
  title: {
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  applyContainer: {
    width: 100,
  },
});

export default ChooseColumnsModal;
