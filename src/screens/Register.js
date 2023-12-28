import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
import InputText from '../common/InputText';
import { Button } from '../common/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native';


const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Other', value: '4' },
];
const Register = ({ navigation }) => {


    const [value, setValue] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShowDate] = useState(false);

    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setShowDate(false);
        setDate(currentDate);
    };

    const displayDatepicker = () => {
        setShowDate(true);
    };

    const handleSelect = (itemValue) => {
        setValue(itemValue);
        setShowPicker(false);
    };

    const formattedDate = mydate.toLocaleDateString();

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
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={"dark-content"} />
            <ScrollView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source= {require('../assets/Images/back.png')}
                            style={{ height: 28, width: 28, marginStart: 20, tintColor: '#3CDA91' }} />
                               </TouchableOpacity>
                        <Image source=
                            {require('../assets/Images/web.png')}
                            style={styles.img} />
                    </View>

                    <View style={styles.containter}>

                        <View style={{ marginTop: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <InputText placeholder={"First Name"}
                                    placeholderTextColor={'gray'}
                                    inputstying={styles.inputEdit}
                                // onChangeText={(t) => setuser({ ...user, name: t })} 

                                />

                                <InputText placeholder={"Last Name"}
                                    placeholderTextColor={'gray'}
                                    inputstying={styles.inputEdit}
                                // onChangeText={(t) => setuser({ ...user, name: t })}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    style={styles.genderStyling}
                                    onPress={() => setShowPicker(!showPicker)}
                                >

                                    <Text style={{ color: 'gray', fontSize: 16 }}>{value ? data.find((item) => item.value === value)?.label : 'Gender'}
                                    </Text>
                                    <Image source=
                                        {require('../assets/Images/down.png')}
                                        style={{ height: 22, width: 22 }} />
                                </TouchableOpacity>

                                <InputText placeholder={"Zipcode"}
                                    placeholderTextColor={'gray'}
                                    keyboardType={'phone-pad'}
                                    inputstying={styles.inputEdit}

                                />

                            </View>

                            {showPicker && <View style={styles.pickerContainer}>{renderPickerItems()}</View>}

                            <TouchableOpacity
                                style={styles.dob}
                                onPress={displayDatepicker}
                            >
                                <Text style={{ color: 'gray' }}>{formattedDate || 'Select Date'}</Text>
                            </TouchableOpacity>
                            {isDisplayDate && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={mydate}
                                    mode={displaymode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={changeSelectedDate}
                                />
                            )}
                            <InputText placeholder={"Mobile Number"}
                                placeholderTextColor={'gray'}
                                keyboardType={'phone-pad'}
                                inputstying={{ marginTop: 14 }}


                            />
                            <InputText placeholder={"Email Address"}
                                placeholderTextColor={'gray'}
                                inputstying={{ marginTop: 14 }}
                            />

                            <InputText placeholder={"Password"}
                                placeholderTextColor={'gray'}
                                inputstying={{ marginTop: 14 }}
                                secureTextEntry
                            // onChangeText={(t) => setuser({ ...user, confirmPassword: t })}
                            />
                        </View>


                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.title}> I agree to our <Text style={styles.titletxt}>
                                Terms of Services <Text style={styles.title}>and </Text>
                                <Text style={styles.titletxt}>Privacy Policy.</Text>
                            </Text>
                            </Text>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button onPress={() => navigation.navigate('VerifyEmail')}
                                styling={styles.logbtn}
                                text={"Continue"}>
                            </Button>
                        </View>
                    </View>
                    {/* <View style={styles.last}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.newTxt}>Joined us before? <Text style={styles.regTxt}>Login </Text> </Text>
                        </TouchableOpacity>
                    </View> */}

                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
}

export default Register



const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20
    },
    genderStyling: {
        width: "48%",
        height: 48,
        borderWidth: 1,
        borderColor: '#F1EDED',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
    },
    dob: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: '#F1EDED',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    text: {
        color: '#3CDA91',
        marginTop: 10,
        fontSize: 29,

    },
    map: {
        flexDirection: "row",

        paddingStart: 15,
        borderColor: '#F2EFEF',
        borderBottomWidth: 0.5,
        padding: 7
    },
    inputEdit: {
        width: '48%'
    },
    img: {
        alignSelf: "center",
        marginTop: 42,
        height: 110, width: 110,
        tintColor: '#3CDA91'
    },
    txt: {
        color: 'gray',
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
    },
    newTxt: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',

    },
    regTxt: {
        color: '#3CDA91',
        fontSize: 18,
        textAlign: 'center',

    },
    title: {
        color: '#000',
        fontSize: 13,

    },
    titletxt: {
        color: '#3CDA91',
        fontSize: 13,
        lineHeight: 18,

    },
    last: {
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingVertical: 14,
        marginTop: 40
    },
    pickerContainer: {
        marginTop: 10,
        backgroundColor: 'white',

        width: '100%',
        elevation: 5,
    },






})