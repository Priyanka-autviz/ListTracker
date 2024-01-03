
import {
  StyleSheet, Text,
  TextInput,
  TouchableOpacity,
  View, StatusBar,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';

import React, { useState } from 'react';
import Header from '../common/Header';
import Images from '../components/Images';
import { Fonts } from '../components/Fonts';

const data = [
  { label: 'Movies', value: '1' },
  { label: 'Books', value: '2' },
  { label: 'Travel', value: '3' },
  { label: 'Cooking', value: '4' },
];

const CreateList = ({ navigation }) => {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [value, setValue] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };


  const handleSelect = (itemValue) => {
    setValue(itemValue);
    setShowPicker(false);
  };

  const renderPickerItems = () => {
    return data.map((item) => (
      <TouchableOpacity
        key={item.label}
        onPress={() => handleSelect(item.value)}
        style={styles.map}
      >
        <View style={styles.circleLabel}>

        </View>
        <Text style={{ color: 'black' }}>{item.label}</Text>
      </TouchableOpacity>
    ));
  };


  return (
    <>
      <StatusBar backgroundColor={'#3CDA91'} barStyle={"dark-content"} />
      <ScrollView>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Header
            Header={'Create List'}
            back={Images.back}
          />
          <View style={styles.container}>
            <Text style={styles.name}>Missions</Text>
            <TextInput
              placeholder='Name'
              placeholderTextColor={'#000'}
              style={styles.input}
            />
            <Text style={styles.name}>Category</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowPicker(!showPicker)}
            >

              <Text style={{ color: 'black', fontFamily: Fonts.DroidSans }}>
                {value ? data.find((item) => item.value === value)?.label : 'Category'}</Text>
              <Image source={require('../assets/Images/down.png')} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>
            {showPicker && <View style={styles.pickerContainer}>{renderPickerItems()}</View>}
            <Text style={styles.name}>Tasks</Text>
            <TextInput
              placeholder='Tasks'
              placeholderTextColor={'gray'}
              style={styles.input}
              value={taskInput}
              onChangeText={(text) => setTaskInput(text)}
            />
            <TouchableOpacity
              style={{ alignItems: 'center', marginTop: 25 }}
              onPress={handleAddTask}
            >
              <View style={styles.button}>
                <Text style={{ color: '#fff', fontFamily: Fonts.DroidSans }}>Add Task</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 280, }}>
              <FlatList
                data={tasks}
                renderItem={({ item }) => (
                  <View style={styles.taskItem}>
                    <Text style={{ color: '#000', fontSize: 15, padding: 14, fontFamily: Fonts.DroidSans }}>
                      {item}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />

            </View>

          </View>
          {tasks.length > 0 && (
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', paddingHorizontal: 40 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{ alignItems: 'center' }}>
                <View style={[styles.button, { height: 32, width: 100 }]}>
                  <Text style={{ color: '#fff', fontFamily: Fonts.DroidSans }}>Submit</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => navigation.navigate('AddFriends')}
              style={{ alignItems: 'center' }}>
                <View style={[styles.button, { height: 32, width: 100 }]}>
                  <Text style={{ color: '#fff', fontFamily: Fonts.DroidSans }}>Add Friend</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  )
}

export default CreateList
const styles = StyleSheet.create({
  customItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "red",
    height: 200,
  },
  roundLabel: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  map: {
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 15,
    borderColor: '#F2EFEF',
    borderBottomWidth: 0.5,
    padding: 7
  },

  labelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  item: {
    fontSize: 14,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,

    color: '#000'
  },
  contain: {
    color: '#000'
  },
  iconStyle: {

    width: 20,
    height: 20,
  },
  itemStyle: {
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    padding: -5,
  },
  inputSearchStyle: {

    height: 40,
    fontSize: 16,
  },
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  taskItem: {
    backgroundColor: '#F1EDED',
    alignSelf: 'flex-start',
    borderRadius: 8,
    marginBottom: 8,
    flex: 0.5,

  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    height: 42,
    width: 200,
    borderRadius: 26,
    fontFamily: Fonts.DroidSans,
    backgroundColor: '#19C375'
  },
  input: {
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000',
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 44,
    fontFamily: Fonts.DroidSans,
    backgroundColor: '#F1EDED'
  },
  name: {
    color: '#000',
    marginTop: 10,
    fontWeight: '500',
    fontFamily: Fonts.DroidSans
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    paddingHorizontal: 8,
    fontSize: 14,

  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  pickerContainer: {
    marginTop: 10,
    backgroundColor: 'white',

    width: '100%',
    elevation: 5,
  },
  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  circleLabel: {
    width: 7,
    height: 7,
    borderRadius: 12,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  labelText: {
    color: 'white',
    fontWeight: 'bold',
  },

});


{/* 
                <Text style={[styles.name, { marginTop: 20 }]}>Invite Friends</Text>
                <TouchableOpacity style={{ alignItems: 'center', marginTop: 10, }} >
                    <View style={styles.button}>
                        <Text style={{ color: '#fff' }}>Add Friend</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: '20%',}}>
                   
                </View>
                <TouchableOpacity style={{ alignItems:'flex-end', marginTop: 10, }} >
                        <View style={[styles.button,{height:32,width:100}]}>
                            <Text style={{ color: '#fff', }}>Done</Text>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', bottom: 25, width: '100%', alignItems: 'center', marginTop: 10, }} >
                    <Text style={{ color: '#000', marginBottom: 10 }}>Too long to type out the tasks?</Text>
                    <View style={styles.button}>
                        <Text style={{ color: '#fff', }}>Share your idea here!</Text>
                    </View>
                </TouchableOpacity> */}


