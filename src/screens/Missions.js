import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import Images from '../components/Images'

const Data = [
    {
        id: 1,
        Text: '2023 Best Picture Oscar Nominees',
        image: Images.res,
        add: Images.plus
    },
    {
        id: 2,
        Text: '2023 Best Picture Oscar Nominees',
        image: Images.res1,
        frnds: '5 friends are participating in this mission',
        add: Images.plus

    },
    {
        id: 3,
        Text: 'Travel the World',
        image: Images.res3,
        add: Images.plus

    },
    {
        id: 10,
        Text: '2023 New York Times 100 Best ',
        frnds: '1 friends are participating in this mission',
        image: Images.res,
        add: Images.plus
    },
    {
        id: 20,
        Text: '2023 New York Michelin Star Restaurants',
        image: Images.res1,
        add: Images.plus

    },
    {
        id: 30,
        Text: 'Travel the World',
        frnds: '2 friends are participating in this mission',
        image: Images.res3,
        add: Images.plus

    }
]
const Missions = () => {
    const item = ({ item }) => (
        <View style={{ flex: 1 }}>


            <TouchableOpacity

                style={styles.flatlist}>
                <View style={styles.top} >
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                            <Text style={styles.text}>{item.Text}</Text>
                            <Text style={styles.lowerText}>{item.frnds}</Text>
                        </View>
                    </View>
                    <Image source={item.add} style={{ height: 15, width: 15 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <Header
                back={Images.back}
                Header={'Movie Missions'}
                showTextInput
            />
            <View style={{ marginTop: 40, }}>
                <FlatList
                    data={Data}
                    renderItem={item}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default Missions

const styles = StyleSheet.create({
    top: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' },
    text: { color: 'black', fontWeight: '600', paddingStart: 8, fontSize: 11, paddingVertical: 3 },
    lowerText: { color: 'black', paddingStart: 8, fontSize: 9, },

    image: { height: 37, width: 38, borderRadius: 2 },

    flatListContainer: {
        marginHorizontal: 10,
    },
    flatlist: {
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 15,
        marginTop: 20,
        backgroundColor: '#fff',
        // paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
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