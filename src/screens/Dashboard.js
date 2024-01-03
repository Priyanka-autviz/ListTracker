import {
    StyleSheet, Text, View,
    TextInput, FlatList,
    StatusBar,
    KeyboardAvoidingView, Image,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import Images from '../components/Images';
import { Fonts } from '../components/Fonts';

const Data = [
    {
        id: 1,
        Text: '2023 New York Times 100 Best Restaurants in NYC',
        image: Images.res,
        add: Images.plus
    },
    {
        id: 2,
        Text: '2023 Hit Movies',
        image: Images.res1,
        add: Images.plus

    },
    {
        id: 3,
        Text: 'Travel the World',
        image: Images.res3,
        add: Images.plus

    }
]
const DATA = [
    {
        id: 1,
        Text: 'New York Missions',
        image: Images.res,
    },
    {
        id: 2,
        Text: 'Miami Missions',
        image: Images.res5,
    },
    {
        id: 3,
        Text: 'International Missions',
        image: Images.res3,
    },
    {
        id: 4,
        Text: 'Movie Missions',
        image: Images.res4,
    },
    {
        id: 5,
        Text: 'Book Missions',
        image: Images.res5,
    },
    {
        id: 6,
        Text: 'New York Missions.',
        image: Images.res3,
    }
]
const Dashboard = ({ navigation }) => {
    const item = ({ item }) => (

        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('User')}
                style={styles.flatlist}>
                <View style={styles.top} >
                    <TouchableOpacity onPress={() => navigation.navigate('Missions')}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.text}>{item.Text}</Text>
                        <Text style={styles.lowerText}>{item.Text}</Text>
                    </View>


                </View>

                <Image source={item.add} style={{ height: 15, width: 15 }} />
            </TouchableOpacity>
        </View>
    )
    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <View style={styles.Flatlist}>
                <TouchableOpacity onPress={() => navigation.navigate('Missions')}>
                    <Image source={item.image} style={styles.img} />
                </TouchableOpacity>
                <Text style={styles.Text}>{item.Text}</Text>
            </View>
        </View>
    )
    return (
        <>
            <StatusBar backgroundColor={'#3CDA91'} barStyle={"dark-content"} />

            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#F5F5F5' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
                <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreateList')}
                            style={styles.createBtn}>
                            <Text style={styles.createListText}>Create List</Text>
                        </TouchableOpacity>
                        <Text style={styles.BrowseStyle}>Browse</Text>
                    </View>
                    <View style={{ position: 'absolute', top: 90, width: '100%' }}>
                        <TextInput
                            placeholder='Search..'
                            placeholderTextColor='black'
                            style={styles.searchInput}
                        />
                    </View>
                    <View style={{ flex: 1.2 }}>
                        <Text style={styles.missions}>Featured Missions:</Text>
                        <FlatList
                            data={Data}
                            renderItem={item}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={{ flex: 1.6 }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            numColumns='2'
                            contentContainerStyle={styles.flatListContainer}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    top: { flexDirection: 'row', width: '88%', alignItems: 'center' },
    Text: { color: 'black', fontFamily: Fonts.DroidSans, paddingStart: 10, marginTop: 4, fontSize: 13 },
    text: {
        color: 'black', fontWeight: '600',

        fontFamily: Fonts.DroidSansBold,
        paddingStart: 8, fontSize: 11, paddingVertical: 3
    },
    lowerText: {
        color: 'black',
        fontFamily: Fonts.DroidSans,
        paddingStart: 8, fontSize: 9,
    },
    img: { height: 52, width: 137, borderRadius: 4 },
    header: {
        backgroundColor: '#3CDA91',
        height: 110, width: '100%'
    },
    image: { height: 37, width: 38, borderRadius: 2 },
    missions: {
        marginStart: 20,
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    flatListContainer: {
        marginHorizontal: 10,
    },
    flatlist: {
        borderWidth: 1,
        justifyContent: 'space-between',
        borderColor: '#fff',
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#fff',
        // paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    Flatlist: {
        color: 'black',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 13,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        paddingVertical: 6,
        borderRadius: 4,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 8,
        height: 40,
        color: 'black',
        backgroundColor: '#fff',
        paddingStart: 10,
        fontFamily: Fonts.DroidSans

    },
    BrowseStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
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
        fontFamily: Fonts.DroidSans,
        paddingVertical: 6,
    }
});