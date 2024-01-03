import { SafeAreaView, StyleSheet, Dimensions, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import InputText from '../common/InputText';
import { Button } from '../common/Button';
import { Fonts } from '../components/Fonts';
import AuthHeader from '../common/AuthHeader';

const Login = ({ navigation }) => {

    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <ScrollView style={{ flex: 1 }}>

                    <View style={styles.containter}>
                        {/* <View style={{ flex: 1, marginTop: 20 }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source= {require('../assets/Images/back.png')}
                            style={{ height: 28, width: 28,  tintColor: '#3CDA91' }} />
                               </TouchableOpacity>
                            <Image source=
                                {require('../assets/Images/web.png')}
                                style={styles.img} />
                        </View> */}
                        <AuthHeader />
                        <View style={{}}>
                            <Text style={styles.text}>User Login </Text>
                            {/* <Text style={styles.txt}> Enter your Email and Password for Login up </Text> */}
                        </View>
                        <View style={{}}>
                            <InputText
                                placeholder={"Email Address/ Mobile Number"}
                                placeholderTextColor={'gray'}
                            />
                            <InputText
                                placeholder={"Password"}
                                placeholderTextColor={'gray'}
                                secureTextEntry
                            />
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <Button
                                text={"Login"} img={'arrowright'}
                                onPress={() => navigation.navigate('BottomTabNavigation')}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                                <Text
                                    style={styles.forTxt}> Forgot Password? </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <View style={{position:'absolute',bottom:10,backgroundColor:'red'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.newTxt}>New Member?<Text style={styles.regTxt}> Register Now </Text> </Text>
                        </TouchableOpacity>
                    </View> */}

                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

export default Login
const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20,

    },
    text: {
        marginTop: 30,
        color: '#3CDA91',
        fontSize: 29,
        fontFamily: Fonts.DroidSansBold
    },
    img: {
        alignSelf: "center",
        marginTop: 42,
        height: 140, width: 140,
        tintColor: '#3CDA91'
    },
    txt: {
        fontSize: 14,
        marginTop: 10,
        color: 'gray',
    },
    forTxt: {
        color: '#0C0C0C',
        fontSize: 15,
        marginTop: 22,
        fontFamily: Fonts.DroidSans,
        textAlign: 'center',
    },
    newTxt: {
        color: '#1C1C1C',
        fontSize: 16,
        textAlign: 'center',
    },
    regTxt: {
        color: '#3CDA91',
        fontSize: 18,
    },
    last: {
        borderTopColor: 'gray', borderTopWidth: 0.5,
        paddingVertical: 14,
        flex: 1,
        backgroundColor: 'red'
        // position: 'relative',
        // top: 0
    }

})