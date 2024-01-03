
import React, { useState } from 'react';
import {
  View, FlatList,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import Header from '../common/Header';
import Images from '../components/Images';
import { Fonts } from '../components/Fonts';

const countryData = [
  { id: '1', no: '1', name: "Afghanistan", isChecked: false },
  { id: '2', no: '2', name: "Albania", isChecked: false },
  { id: '3', no: '3', name: "Algeria", isChecked: false },
  { id: '4', no: '4', name: "Andorra", isChecked: false },
  { id: '5', no: '5', name: "Angola", isChecked: false },
  { id: '6', no: '6', name: "Antigua and Barbuda", isChecked: false },
  { id: '7', no: '7', name: "Argentina", isChecked: false },
  { id: '8', no: '8', name: "Armenia", isChecked: false },
  { id: '9', no: '9', name: "Australia", isChecked: false },
  { id: '10', no: '10', name: "Austria", isChecked: false },
  { id: '11', no: '11', name: "Azerbaijan", isChecked: false },
  { id: '12', no: '12', name: "Bahamas", isChecked: false },
  { id: '13', no: '13', name: "Bahrain", isChecked: false },
  { id: '14', no: '14', name: "Bangladesh", isChecked: false },
  { id: '15', no: '15', name: "Barbados", isChecked: false },
  { id: '16', no: '16', name: "Belarus", isChecked: false },
  { id: '17', no: '17', name: "Belgium", isChecked: false },
  { id: '18', no: '18', name: "Belize", isChecked: false },
  { id: '19', no: '19', name: "Benin", isChecked: false },
  { id: '20', no: '20', name: "Bhutan", isChecked: false },
  { id: '21', no: '21', name: "Bolivia", isChecked: false },
  { id: '22', no: '22', name: "Bosnia and Herzegovina", isChecked: false },
  { id: '23', no: '23', name: "Botswana", isChecked: false },
  { id: '24', no: '24', name: "Brazil", isChecked: false },
  { id: '25', no: '25', name: "Brunei", isChecked: false },
  { id: '26', no: '26', name: "Bulgaria", isChecked: false },
  { id: '27', no: '27', name: "Burkina Faso", isChecked: false },
  { id: '28', no: '28', name: "Burundi", isChecked: false },
  { id: '29', no: '29', name: "Cabo Verde", isChecked: false },
  { id: '30', no: '30', name: "Cambodia", isChecked: false },
];



const CountryList = ({ navigation }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [data, setData] = useState(countryData);

const CustomCheckbox = ({ isChecked }) => (
  <TouchableOpacity
  onPress={()=>navigation.navigate('SelectImage')}
  style={styles.checkbox}>
    {isChecked ? (
      <Image source={require('../assets/Images/tick.png')} style={styles.tickImage} />
    ) : null}
  </TouchableOpacity>
);

  const handleSelectItem = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => handleSelectItem(item.id)}
    >
      <Text style={styles.text}>{item.no}</Text>
      <Text style={styles.text}>{item.name}</Text>
      <CustomCheckbox isChecked={item.isChecked}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <Header
          Header={'Travel the World'}
          back={Images.back}
          img={Images.info}
          info
          infoOnpress={()=>setmodalVisible(true)}
          showProgress
          isCenterShown
          onPress={() => navigation.navigate('Leaderboard')}
          LowerText={'9 friends are participating in this missions'}
        />

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', paddingBottom: 10, paddingHorizontal: 10, justifyContent: 'space-between' }}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontFamily: Fonts.DroidSans }}>#</Text>
            <Text style={{ color: '#000', fontWeight: 'bold', fontFamily: Fonts.DroidSans }}> Task</Text>
            <Text style={{ color: '#000', fontWeight: 'bold', marginRight: 11 }}> </Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
      <Modal animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=>setmodalVisible(false)}
       >
       <View style={{ flex: 1, justifyContent: 'center',paddingHorizontal:30, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', justifyContent:'center',alignItems:'center', padding: 20,paddingVertical:30, borderRadius: 10 }}>
            <TouchableOpacity
            onPress={()=>setmodalVisible(false)}
            style={{alignSelf:'flex-end'}}>
              <Image source={Images.close} style={{height:28,width:28,tintColor:'gray'}}/>
            </TouchableOpacity>
            <Text style={{color:'#3CDA91',fontFamily:Fonts.DroidSansBold,fontSize:18}}>Description</Text>
            <Text style={{color:'gray',fontFamily:Fonts.DroidSans,paddingBottom:30,textAlign:'center',marginTop:15,lineHeight:17}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Text>
       
          </View>
        </View>


      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxContainer: {
    marginBottom: 1,
    backgroundColor: '#fff',
    padding: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.DroidSans
  },
  checkboxUnchecked: {
    height: 24,
    width: 24,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
  },
  checkboxChecked: {
    height: 24,
    width: 24,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CountryList;
