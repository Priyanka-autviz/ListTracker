import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import InputText from '../common/InputText'
import { Button } from '../common/Button'
import Images from '../components/Images'
import { Fonts } from '../components/Fonts'
import AuthHeader from '../common/AuthHeader'

const ConfirmPassword = ({ navigation }) => {
    return (
        <View style={{ flex: 1,backgroundColor:"#F5F5F5", paddingHorizontal: 20 }}>
             
              
           
            <AuthHeader />
          <Text style={styles.text}>Set Your Password  </Text>
            <Text style={{ fontSize: 16, color: 'black',  fontFamily:Fonts.DroidSans, marginTop: 25 }}>New Password</Text>
            <InputText placeholder={"New Password"}
                placeholderTextColor={'gray'}
                keyboardType={'phone-pad'}
                inputstying={{ marginTop: 10 }}
            />
            <Text style={{ fontSize: 16, color: 'black', marginTop: 25,  fontFamily:Fonts.DroidSans }}>Confirm Password</Text>
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
        fontFamily:Fonts.DroidSansBold
    },
})