import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { Button } from '../common/Button';
import InputText from '../common/InputText';
import Images from '../components/Images';
import { Fonts } from '../components/Fonts';
import AuthHeader from '../common/AuthHeader';



const ForgotPassword = ({ navigation }) => {



  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5', }}>

        <ScrollView style={{ flex: 1,paddingHorizontal:20, }} showsVerticalScrollIndicator={false}>
        
          <AuthHeader />
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
   
  },
  text: {
    color: '#3CDA91',
    marginTop: 30,
    fontSize: 29,
    fontFamily:Fonts.DroidSansBold
  },
  txt: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,
    fontFamily:Fonts.DroidSans

  },
  imgview: {
    justifyContent: 'center', alignItems: 'center', marginTop: 90,
  }

})