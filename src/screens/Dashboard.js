import {
    StyleSheet, Text, View,
    TextInput, FlatList,
    StatusBar,
    KeyboardAvoidingView, Image,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import Images from '../components/Images';

const Data = [
    {
        id: 1,
        Text: '2023 New York Times 100 Best Restaurants in NYC',
        image: Images.res,
        add: Images.plus
    },
    {
        id: 2,
        Text: '2023 New York Michelin Star Restaurants',
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
        Text: 'New York Mission',
        image: Images.res,
    },
    {
        id: 2,
        Text: 'Miami Mission',
        image: Images.res5,
    },
    {
        id: 3,
        Text: 'International Mission',
        image: Images.res3,
    },
    {
        id: 4,
        Text: 'Movie Mission',
        image: Images.res4,
    },
    {
        id: 5,
        Text: 'Book Mission',
        image: Images.res5,
    },
    {
        id: 6,
        Text: 'New York Mission.',
        image: Images.res3,
    }
]
const Dashboard = ({ navigation }) => {
    const item = ({ item }) => (

        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Missions')}
                style={styles.flatlist}>
                <View style={styles.top} >
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                            <Text style={styles.text}>{item.Text}</Text>
                            <Text style={styles.lowerText}>{item.Text}</Text>
                        </View>
                    </View>
                    <Image source={item.add} style={{ height: 15, width: 15 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <View style={styles.Flatlist}>
                <Image source={item.image} style={styles.img} />
                <Text style={styles.Text}>{item.Text}</Text>
            </View>
        </View>
    )
    return (
        <>
            <StatusBar backgroundColor={'#19C375'} barStyle={"dark-content"} />

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
    top: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' },
    Text: { color: 'black', paddingStart: 10, marginTop: 4, fontSize: 13 },
    text: { color: 'black', fontWeight: '600', paddingStart: 8, fontSize: 11, paddingVertical: 3 },
    lowerText: { color: 'black', paddingStart: 8, fontSize: 9, },
    img: { height: 52, width: 137, borderRadius: 4 },
    header: {
        backgroundColor: '#19C375',
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
        borderColor: '#fff',
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#fff',
        // paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
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
});