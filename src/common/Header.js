import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../components/Images';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../components/Fonts';


const Header = ({ Header, img, back, onPress, infoOnpress, showSearch,filter,
    showProgress, progress, progres, isCenterShown, onPressFrnd,upload,infoStyle,
    headerTextInputProps, LowerText, showShare, friends, info, frnds, filterOnpress,
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
                    {
                        info && (
                            <TouchableOpacity onPress={infoOnpress}>
                                <Image source={img} style={[styles.imageStyle,infoStyle]} />
                            </TouchableOpacity>
                        )
                    }

                    {
                        friends && (
                            <TouchableOpacity
                                onPress={onPressFrnd}
                                style={{ alignItems: 'center' }}>

                                <View style={styles.imgView}>
                                    <Image source={frnds} style={{ height: 21, width: 21 }} />
                                </View>
                                <Text style={styles.friends}>Friends</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <Text style={styles.BrowseStyle}>{Header}</Text>
                {
                    isCenterShown && (
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.centerText}>{centerText}</Text>
                            <Text style={styles.LowerText}>{LowerText}</Text>
                        </TouchableOpacity>)}
                {
                    showProgress && (
                        <View style={styles.ViewStyle}>
                            <Text style={styles.progres}>{progress}</Text>
                            <Text style={styles.progress}>{progres}</Text>
                        </View>
                    )
                }
            </View>
            {
                showSearch && (
                    <View style={{ position: 'absolute', top: 100, width: '100%' }}>
                        <View style={[styles.input, { justifyContent: 'center' }]}>
                            <TextInput
                                placeholder='Search..'
                                placeholderTextColor='black'
                                style={styles.searchInput}
                                {...headerTextInputProps}
                            />


                        </View>
                    </View>
                )
            }
            {
                showTextInput && (
                    <View style={{ position: 'absolute', top: 100, width: '100%' }}>
                        <View style={styles.input}>
                            <TextInput
                                placeholder='Search..'
                                placeholderTextColor='black'
                                style={styles.searchInput}
                                {...headerTextInputProps}
                            />

                            <View style={styles.img}>
                                <Image source={filter} style={{ height: 24, width: 24 }} />
                            </View>
                        </View>
                    </View>
                )
            }

            {
                showShare && (

                  
                    <View style={{ position: 'absolute', top: 100, width: '100%' }}>

                        <View style={styles.top}>
                        {
                        upload &&(
                            <View style={styles.imag}>
                            <Image source={require('../assets/Images/upload.png')} style={{ height: 20, width: 20 }} />
                        </View>  
                        )
                    }
                           
                            <TouchableOpacity
                                onPress={filterOnpress}
                                style={styles.Image}>
                                <Image source={Images.filter} style={{ height: 21, width: 21 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    friends: {
        color: '#fff',
        marginTop: 4,
        fontSize: 11,
        fontFamily: Fonts.DroidSans
    },
    imgView: {
        height: 37,
        width: 37,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    Image: {
        height: 40, width: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    ViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    top: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent:'flex-end',
        marginHorizontal: 20
    },
    img: {
        height: 40, width: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    imag: {
        height: 40,
        width: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '74%',
        borderRadius: 8,
        height: 40,
        color: 'black',
        backgroundColor: '#fff',
        paddingStart: 10,
        fontFamily: Fonts.DroidSans

    },
    progress: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: Fonts.DroidSans
    },
    progres: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: Fonts.DroidSans
    },
    LowerText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: Fonts.DroidSans
    },
    centerText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: Fonts.DroidSans
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
        backgroundColor: '#3CDA91',
        height: 120, width: '100%'
    },
    BrowseStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontFamily: Fonts.DroidSansBold

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