import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import InputText from '../common/InputText'
import { Button } from '../common/Button'
import Images from '../components/Images'

const ConfirmPassword = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source= {require('../assets/Images/back.png')}
                            style={{ height: 28, width: 28,marginTop:20,  tintColor: '#3CDA91' }} />
                               </TouchableOpacity>  
              <View style={styles.imgview}>
           
            <Image source={Images.web}
              style={{ height: 140, width: 140, tintColor: '#3CDA91' }} />
          </View>
          <Text style={styles.text}>Set Your Password  </Text>
            <Text style={{ fontSize: 16, color: 'black', marginTop: 25 }}>New Password</Text>
            <InputText placeholder={"New Password"}
                placeholderTextColor={'gray'}
                keyboardType={'phone-pad'}
                inputstying={{ marginTop: 10 }}
            />
            <Text style={{ fontSize: 16, color: 'black', marginTop: 25 }}>Confirm Password</Text>
            <InputText placeholder={"Confirm Password"}
                placeholderTextColor={'gray'}
                keyboardType={'phone-pad'}
                inputstying={{ marginTop: 10 }}
            />
            <View style={{ marginTop: 60 }}>
                <Button onPress={() => navigation.navigate('Login')}
                    styling={styles.logbtn}
                    text={"Continue"}>
                </Button>
            </View>
        </View>
    )
}

export default ConfirmPassword

const styles = StyleSheet.create({
    imgview: {
        justifyContent: 'center', alignItems: 'center', marginTop: 90,
      },
      text: {
        marginTop: 30,
        color: '#3CDA91',
        fontSize: 29,
    },
})