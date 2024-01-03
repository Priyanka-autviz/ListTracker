import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import Header from '../common/Header'
import Images from '../components/Images'
import { Fonts } from '../components/Fonts';
import RBSheet from "react-native-raw-bottom-sheet";
import { Button } from '../common/Button';
import { color } from '../components/color';


const data = [
    {
        profile: 'AN',
        HeaderText: "Ankush has Completed the Task ‘Indonesia’  from “Travel the World”",
        bottomText: 'Indonesia a vast archipelago in Southeast Asia, Boasts stunning natural....',
        Image: Images.res1,
        Images: Images.res5,
    },
    {
        profile: 'AN',
        HeaderText: "Ankush has Completed the Task ‘Indonesia’  from “Travel the World”",
        bottomText: 'Indonesia a vast archipelago in Southeast Asia, Boasts stunning natural....',
        Images: Images.res5,
        Image: Images.res1,
    },
    {
        profile: 'AN',
        HeaderText: "Ankush has Completed the Task ‘Indonesia’  from “Travel the World”",
        bottomText: 'Indonesia a vast archipelago in Southeast Asia, Boasts stunning natural....',
        Images: Images.res5,
        Image: Images.res1,
    },
]

const Friends = ({ navigation }) => {

    const bottomSheetRef = useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current.open();
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current.close();
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate('ShowPhotos')}
        style={styles.FlatList}>
            <View style={styles.user}>
                <Text style={styles.userName}>{item.profile}</Text>
    
            </View>
            <View>
                <Text style={styles.HeaderText}>{item.HeaderText}</Text>
                <Text style={styles.bottomText}>{item.bottomText}</Text>
                <View style={{ flexDirection: 'row', paddingStart: 10, marginTop: 5 }}>
                    <Image source={item.Images} style={{ height: 42, width: 42, borderRadius: 4, }} />
                    <Image source={item.Image} style={styles.img} />
                    <Image source={item.Images} style={styles.img} />
                    <Image source={item.Image} style={styles.img} />
                    <Image source={item.Images} style={styles.img} />
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
            <Header
                showShare
                Header={'Friends'}
                back={Images.back}
                friends
                filterOnpress={openBottomSheet}
                onPressFrnd={() => navigation.navigate('FriendsList')}
                frnds={Images.friends}
            />
            <View style={{ marginTop: 30 }}>

            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <RBSheet
                ref={bottomSheetRef}
                closeOnDragDown={true}
                height={300}
                openDuration={250}
                customStyles={{
                    container: {
                        padding: 20,

                        borderRadius: 30,
                    },
                }}
            >
                <View style={{}}>
                    <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: Fonts.DroidSansBold, color: color.green }}>Filter By Category</Text>
                    <View style={{ marginTop: 19 }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontFamily: Fonts.DroidSans, fontSize: 17 }}>Movies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontFamily: Fonts.DroidSans, fontSize: 17, marginTop: 7 }}>Books</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontFamily: Fonts.DroidSans, fontSize: 17, marginTop: 7 }}>News</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontFamily: Fonts.DroidSans, fontSize: 17, marginTop: 7 }}>Movies</Text>
                        </TouchableOpacity>
                    </View>
                    <Button text="Apply"
                        styling={styles.btn}
                        onPress={closeBottomSheet} />
                </View>
            </RBSheet>
        </View>
    )
}

export default Friends

const styles = StyleSheet.create({
    btn: {
        height: 40, width: 120,
        marginTop: 20
    },
    user: {
        height: 32, width: 32,
        borderRadius: 30, alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CDA91',


    },
    FlatList: {
        flex: 1, backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#F5F5F5',
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    userName: {
        color: '#fff',
        fontSize: 12,
        fontFamily: Fonts.DroidSans

    },
    img: {
        height: 42, width: 42,
        borderRadius: 4, marginLeft: 7
    },
    HeaderText: {
     
        width: '67%',
        fontWeight: '600',
        paddingStart: 10,
        color: 'black',
        fontSize: 12,
        fontFamily: Fonts.DroidSans
    },
    bottomText: {
        flex: 1,
        paddingStart: 10,
        paddingVertical: 6,
        width: '70%',
        color: 'gray',
        fontSize: 11,
        fontFamily: Fonts.DroidSans
    }
})