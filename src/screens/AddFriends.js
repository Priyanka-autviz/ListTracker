import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import Images from '../components/Images'
import { Fonts } from '../components/Fonts';

const data = [
    {
        profile: 'AN',
        HeaderText: "Ankush",
        bottomText: 'You both have 3 same travelling Missions',

    },
    {
        profile: 'AN',
        HeaderText: "Saurabh",
        bottomText: 'You both have 3 same travelling Missions',
    },
    {
        profile: 'AN',
        HeaderText: "Nitin",
        bottomText: 'You both have 3 same travelling Missions',
    },
    {
        profile: 'AN',
        HeaderText: "Ankush",
        bottomText: 'You both have 3 same travelling Missions',

    },
    {
        profile: 'AN',
        HeaderText: "Saurabh",
        bottomText: 'You both have 3 same travelling Missions',
    },
    {
        profile: 'AN',
        HeaderText: "Nitin",
        bottomText: 'You both have 3 same travelling Missions',
    },
]
const renderItem = ({ item }) => (
    <View style={styles.FlatList}>
        <View style={styles.user}>
            <Text style={styles.userName}>{item.profile}</Text>

        </View>
        <View>
            <Text style={styles.HeaderText}>{item.HeaderText}</Text>
            <Text style={styles.bottomText}>{item.bottomText}</Text>

        </View>
        <Image source={Images.plus} style={{height:15,width:15}}/>
    </View>
)
const AddFriends = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5',paddingBottom:10, }}>
            <Header
                Header={'Friends List'}
                back={Images.back}
                showTextInput
                filter={Images.filter}
            />
            <View style={{ marginTop: 30 }}>

            </View>
         
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
           
        </View>
    )
}

export default AddFriends


const styles = StyleSheet.create({
    user: {
        height: 42, width: 42,
        borderRadius: 12, alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CDA91',


    },
    FlatList: {
        flex: 1, backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#F5F5F5',
        borderRadius: 8,
        marginHorizontal: 20,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 15,
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
        flex: 1,
     
        fontWeight: '600',
        paddingStart: 20,
        color: 'black',
        fontSize: 12,
        fontFamily: Fonts.DroidSans
    },
    bottomText: {
        flex: 1,
        paddingStart: 20,
        paddingVertical: 6,
    width:'80%',
        color: 'gray',
        fontSize: 11,
        fontFamily: Fonts.DroidSans
    }
})