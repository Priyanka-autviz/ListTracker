import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Images from '../components/Images';
import { Button } from '../common/Button';


const CELL_COUNT = 6;

const VerifyEmail = ({ navigation }) => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source= {require('../assets/Images/back.png')}
                            style={{ height: 28, width: 28,  tintColor: '#3CDA91' }} />
                               </TouchableOpacity>
                    <View style={styles.imgview}>
            <Image source={Images.web}
              style={{ height: 140, width: 140, tintColor: '#3CDA91' }} />
          </View>
                        <Text style={styles.number}>Verify your Email </Text>
                        <Text style={styles.text}> Please enter the verification code sent to email</Text>

                    </View>
                    <View style={{ flex: 2, }}>
                        <View style={{ marginTop: 35, }}>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                        </View>
                        <View style={{}}>
                            <Button
                                onPress={() => navigation.navigate('Login')}
                                styling={styles.verifybtn}
                                text={'Next'}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.resend}> Resend verification code?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default VerifyEmail

const styles = StyleSheet.create({

    header: {
        flex: 1,

        padding: 25,
    },
    resend: {
        color: 'gray',
        textAlign: "center",
        fontSize: 15,
        marginVertical: 30,
        fontFamily: 'Poppins-Regular'
    },
    root: {
        flex: 1,
        padding: 20
    },
    imgview: {
        justifyContent: 'center', alignItems: 'center', marginTop: 90,
      },
    num: {

        marginTop: 3,
        fontFamily: 'Poppins-Regular'
    },
    back: {
        color: 'black',
        marginLeft: 9, fontSize: 15,
        fontFamily: 'Poppins-Medium'
    },
    img: {
        flexDirection: 'row',
        marginTop: '17%',
        alignItems: 'center',
    },
    text: {
        color: 'gray',
        fontSize: 14,


    },
    verifybtn: {
        marginTop: '20%',
        color: '#fff'

    },
    number: {
        marginTop: 29,
        fontSize: 26,
        color: '#3CDA91'

    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20,
        color: 'gray'
    },
    cell: {
        width: 47,
        height: 47,
        borderRadius: 8,
        lineHeight: 38,
        paddingTop: 4,
        color: 'gray',
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
})