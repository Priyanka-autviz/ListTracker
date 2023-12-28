import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../components/Images';
import { useNavigation } from '@react-navigation/native';


const Header = ({ Header, img, back, onPress,
    showProgress, progress, progres, isCenterShown,
    headerTextInputProps, LowerText,
    centerText, showTextInput }) => {

        const navigation = useNavigation();

    return (
        <View style={{}}>
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row', paddingHorizontal: 20,
                    paddingTop: 20, justifyContent: 'space-between',
                }}>
                    <TouchableOpacity 
                    
                    onPress={() => navigation.goBack()}
                    >
                        <Image source={back} style={styles.image} />
                    </TouchableOpacity>

                    <Image source={img} style={styles.imageStyle} />
                </View>
                <Text style={styles.BrowseStyle}>{Header}</Text>
                {
                    isCenterShown && (
                        <TouchableOpacity onPress={onPress}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, }}>{centerText}</Text>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, }}>{LowerText}</Text>
                        </TouchableOpacity>)}
                {
                    showProgress && (

                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between' }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, }}>{progress}</Text>

                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, }}>{progres}</Text>

                        </View>
                    )
                }
            </View>
            {
                showTextInput && (
                    <View style={{ position: 'absolute', top: 100, width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                            <TextInput
                                placeholder='Search..'
                                placeholderTextColor='black'
                                style={styles.searchInput}
                                {...headerTextInputProps}
                            />
                            <View style={{ height: 40, width: 70, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: 8, }}>
                                <Image source={Images.filter} style={{ height: 24, width: 24 }} />
                            </View>
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '74%',
        borderRadius: 8,
        height: 40,
        color: 'black',
        backgroundColor: '#fff',
        paddingStart: 10,

    },
    imageStyle: {
        height: 24, width: 24,
        tintColor: '#fff',

    },
    image: {
        height: 24, width: 24,
        tintColor: '#fff',
    },
    header: {
        backgroundColor: '#19C375',
        height: 120, width: '100%'
    },
    BrowseStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,


    },
    createBtn: {
        alignItems: 'flex-end',
        marginRight: 20,

    },
    createListText: {
        color: '#fff',
        paddingHorizontal: 17,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 25,
        borderRadius: 100,
        paddingVertical: 6,
    }
})