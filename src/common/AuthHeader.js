import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import Images from '../components/Images'

const AuthHeader = () => {
    return (
        <View style={{ height:270,  }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/Images/back.png')}
                    style={{ height: 28, width: 28, tintColor: '#3CDA91' }} />
            </TouchableOpacity>
            <View style={styles.imgview}>
                <Image source={Images.web}
                    style={{ height: 140, width: 140, tintColor: '#3CDA91' }} />
            </View>
        </View>
    )
}

export default AuthHeader

const styles = StyleSheet.create({
    imgview: {
         alignItems: 'center', marginTop: 90,
    },
})