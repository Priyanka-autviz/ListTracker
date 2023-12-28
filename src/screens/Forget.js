import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet,TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { Button } from '../common/Button';
import InputText from '../common/InputText';
import Images from '../components/Images';



const ForgotPassword = ({ navigation }) => {



  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', }}>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source= {require('../assets/Images/back.png')}
                            style={{ height: 28, width: 28,margin:20,  tintColor: '#3CDA91' }} />
                               </TouchableOpacity>
          <View style={styles.imgview}>
            <Image source={Images.web}
              style={{ height: 140, width: 140, tintColor: '#3CDA91' }} />
          </View>
          <View style={styles.containter}>
            <View>
              <Text style={styles.text}>Forgot Password</Text>
              <Text style={styles.txt}>We have sent an OTP to the registered email</Text>
            </View>
            <View style={{ marginTop: 18 }}>
              <InputText placeholder={"Email Address"}
                placeholderTextColor={'gray'}

              // onChangeText={(t) => setuser({ ...user, email: t })}
              />
              <View style={{ marginTop: 42 }}>
                <Button
                  onPress={() => navigation.navigate('VerifyNumber')}
                  styling={styles.logbtn}
                  text={"Submit"}></Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
export default ForgotPassword

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#3CDA91',
    marginTop: 90,
    fontSize: 29,

  },
  txt: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,


  },
  imgview: {
    justifyContent: 'center', alignItems: 'center', marginTop: 90,
  }

})