import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import { Button } from '../common/Button';
import Images from '../components/Images';



const Onboarding = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={"dark-content"} />
            <SafeAreaView style={{ flex: 1, }}>

                <View style={styles.top}>
                    <Image source={Images.web} style={{ height: 180, width: 180, tintColor: '#3CDA91' }} />
                </View>
                <View style={styles.end}>
                    <Button
                        text={"Login"}
                        onPress={() => navigation.navigate('Login')} />
                    <Button
                        styling={styles.resbtn}
                        text={"Register"}
                        textstyle={styles.restext}
                        onPress={() => navigation.navigate('Register')} />
                </View>

            </SafeAreaView>

        </>
    )


}
export default Onboarding

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },

    btntext: {
        color: 'black',
    },
    resbtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#3CDA91',
        marginTop: 21
    },
    top: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    end: {
        flex: 0.2,
        paddingBottom: 30,
        paddingStart: 24,
        paddingEnd: 15
    },
    restext: {
        fontSize: 18,
        color: '#3CDA91',
    }
})