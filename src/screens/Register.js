import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Image,
    TouchableOpacity, StatusBar, KeyboardAvoidingView
} from 'react-native';
import InputText from '../common/InputText';
import { Button } from '../common/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native';
import { Fonts } from '../components/Fonts';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { color } from '../components/color';
import register from '../modules/register';

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
    const [fetchedData, setFetchedData] = useState([]);
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const dispatch = useDispatch();

    const fetchData = async () => {
        const endpoint = 'http://192.168.18.236:8000/data/total-user-friends-already-registered/';
        const phoneNumbers = [9786645456, 21323, 9781025001];

        try {
            const response = await axios.post(
                endpoint,
                { phone_numbers: phoneNumbers },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Response:', response.data.data.total_friends);
            setFetchedData(JSON.stringify(response.data.data.total_friends));
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    const userRegisterApiCall = () => {
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: emailId,
            phone_number: phone,
            // date_of_birth: mydate,
            password: password,
            // gender: gender,
        };
        dispatch(register(data)).then(response => {
            console.log('Response:', response);
            if (response && response.payload && response.payload.success === true) {
                Alert.alert(response.payload.message);
                navigation.goBack();
            } else if (response && response.payload && response.payload.data) {
                Alert.alert(response.payload.data);
            } else {
                // Handle other cases or log the response for further investigation
                console.log('Unexpected response:', response);
            }
        }).catch(error => {
            console.error('Error:', error);
            // Handle the error appropriately
        });
    };


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
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/Images/back.png')}
                                style={{ height: 28, width: 28, marginStart: 20, tintColor: '#3CDA91' }} />
                        </TouchableOpacity>
                        <Text style={{ color: color.green, fontSize: 15 }}>               {fetchedData} of your friends are already using our app </Text>
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
                                    value={firstName}
                                    onChangeText={firstName => setFirstName(firstName)}

                                />

                                <InputText placeholder={"Last Name"}
                                    placeholderTextColor={'gray'}
                                    inputstying={styles.inputEdit}
                                    value={lastName}
                                    onChangeText={lastName => setLastName(lastName)}
                                />

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    style={styles.genderStyling}
                                    onPress={() => setShowPicker(!showPicker)}
                                >

                                    <Text style={{ color: 'gray', fontSize: 16, fontFamily: Fonts.DroidSans }}>{value ? data.find((item) => item.value === value)?.label : 'Gender'}
                                    </Text>
                                    <Image source=
                                        {require('../assets/Images/down.png')}
                                        style={{ height: 22, width: 22 }} />
                                </TouchableOpacity>

                                <InputText placeholder={"Zipcode"}
                                    placeholderTextColor={'gray'}
                                    keyboardType={'phone-pad'}
                                    inputstying={styles.inputEdit} />

                            </View>

                            {showPicker && <View style={styles.pickerContainer}>{renderPickerItems()}</View>}

                            <TouchableOpacity
                                style={styles.dob}
                                onPress={displayDatepicker}
                            >
                                <Text style={{ color: 'gray', fontFamily: Fonts.DroidSans }}>{formattedDate || 'Select Date'}</Text>
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
                                value={phone}
                                onChangeText={phone => setPhone(phone)}

                            />
                            <InputText placeholder={"Email Address"}
                                placeholderTextColor={'gray'}
                                inputstying={{ marginTop: 14 }}
                                value={emailId}
                                onChangeText={emailId => setEmailId(emailId)}
                            />

                            <InputText placeholder={"Password"}
                                placeholderTextColor={'gray'}
                                inputstying={{ marginTop: 14 }}
                                secureTextEntry
                                value={password}
                                onChangeText={password => setPassword(password)} />
                        </View>


                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.title}> I agree to our <Text style={styles.titletxt}>
                                Terms of Services <Text style={styles.title}>and </Text>
                                <Text style={styles.titletxt}>Privacy Policy.</Text>
                            </Text>
                            </Text>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button
                                onPress={() => userRegisterApiCall()}
                                styling={styles.logbtn}
                                text={"Next"}>
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
        marginTop: 34,
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
        fontFamily: Fonts.DroidSans

    },
    titletxt: {
        color: '#3CDA91',
        fontSize: 13,
        lineHeight: 18,
        fontFamily: Fonts.DroidSans
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