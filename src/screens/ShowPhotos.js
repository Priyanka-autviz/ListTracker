import {
    Image,
    StyleSheet,
    SafeAreaView,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import React, { useState } from 'react'
import Header from '../common/Header'
import { color } from '../components/color'
import { Fonts } from '../components/Fonts'
import { launchImageLibrary } from 'react-native-image-picker';
import Images from '../components/Images';
import { Button } from '../common/Button';

const ShowPhotos = ({navigation}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null); 
    const [selectedThird, setSelectedThird] = useState(null);
    const [selectedFourth, setSelectedFourth] = useState(null); 

    const openImagePicker = () => {
        const option = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(option, (response) => {
            if (response.didCancel) {
                console.log('User cancellled image picker');
            } else if (response.error) {
                console.log('Image picker error', response.error);

            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri)
            }
        })
    }

    const ImagePicker = () => {
        const option = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(option, (response) => {
            if (response.didCancel) {
                console.log('User cancellled image picker');
            } else if (response.error) {
                console.log('Image picker error', response.error);

            } else {
                let imageUrl = response.uri || response.assets?.[0]?.uri;
                setSelectedSecond(imageUrl)
            }
        })
    }

    const openThirdPicker = () => {
        const option = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(option, (response) => {
            if (response.didCancel) {
                console.log('User cancellled image picker');
            } else if (response.error) {
                console.log('Image picker error', response.error);

            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedThird(imageUri)
            }
        })
    }

    const ImageFourthPicker = () => {
        const option = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(option, (response) => {
            if (response.didCancel) {
                console.log('User cancellled image picker');
            } else if (response.error) {
                console.log('Image picker error', response.error);

            } else {
                let imageUrl = response.uri || response.assets?.[0]?.uri;
                setSelectedFourth(imageUrl)
            }
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <Header
                Header={'Travel the World'}
                back={Images.back}
            />
            <View style={styles.container}>
                <Text style={styles.select}>Notes</Text>
                <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has</Text>
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                    {
                        selectedImage ? (
                            <View style={styles.userPhoto}>
                                <TouchableOpacity
                                    onPress={openImagePicker}>
                                    <Image source={Images.res} style={styles.img} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.userPhoto}>
                                <TouchableOpacity style={styles.imgStyle}
                                    onPress={openImagePicker}>
                                    <Image source={Images.res} style={{
                                        height: 150, width: 150, 
                                    }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                      {
                      selectedSecond   ? (
                            <View style={styles.userPhoto}>
                                <TouchableOpacity
                                    onPress={ImagePicker}>
                                    <Image source={{ uri: selectedSecond }} style={styles.img} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.userPhoto}>
                                 <TouchableOpacity style={styles.imgStyle}
                                    onPress={openImagePicker}>
                                    <Image source={Images.res1} style={{
                                        height: 150, width: 150, 
                                    }} />
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={styles.imgStyle}
                                    onPress={ImagePicker}>
                                    <Image source={Images.plus} style={{
                                        height: 30, width: 30, tintColor: '#F5F5F5'
                                    }} />
                                </TouchableOpacity> */}
                            </View>
                        )
                    }
                </View>
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                    {
                        selectedThird ? (
                            <View style={styles.userPhoto}>
                                <TouchableOpacity
                                    onPress={openThirdPicker}>
                                    <Image source={{ uri: selectedThird }} style={styles.img} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.userPhoto}>
                                 <TouchableOpacity style={styles.imgStyle}
                                    onPress={openImagePicker}>
                                    <Image source={Images.res5} style={{
                                        height: 150, width: 150, 
                                    }} />
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={styles.imgStyle}
                                    onPress={openThirdPicker}>
                                    <Image source={Images.plus} style={{
                                        height: 30, width: 30, tintColor: '#F5F5F5'
                                    }} />
                                </TouchableOpacity> */}
                            </View>
                        )
                    }
                      {
                      selectedFourth   ? (
                            <View style={styles.userPhoto}>
                                <TouchableOpacity
                                    onPress={ImageFourthPicker}>
                                    <Image source={{ uri: selectedFourth }} style={styles.img} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.userPhoto}>
                               <TouchableOpacity style={styles.imgStyle}
                                    onPress={openImagePicker}>
                                    <Image source={Images.res4} style={{
                                        height: 150, width: 150, 
                                    }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>

    
            </View>
        </View>
    )
}

export default ShowPhotos

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    btn:{
height:42,width:'50%',marginVertical:25,
    },
    imgStyle: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: color.green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    select: {
        color: color.green,
        fontSize: 25,
        fontFamily: Fonts.DroidSansBold
    },
    img:{
        height: 150, width: 150,
         borderColor: color.green,
          borderWidth: 1
    },
    content: {
        color: 'gray',
        fontFamily: Fonts.DroidSans,
        marginVertical: 15,
    },
    upload: {

        backgroundColor: color.green,
        height: 31,
        width: 108,
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 6
    },
    userPhoto: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,

    }
})