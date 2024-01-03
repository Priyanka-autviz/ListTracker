import React from 'react';
import { View, FlatList, StyleSheet, Text as RNText, TouchableOpacity } from 'react-native';
import { Svg, Ellipse, Text } from 'react-native-svg';
import Header from '../common/Header';
import Images from '../components/Images';
import { Image } from 'react-native';
const data = [
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.profile,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.profile,
    },

    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.profile,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },

    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },
    {
        id: '1',
        text: 'Moshe Cohen',
        btmtext: "1",
        progress: 0.5,
        img: Images.star,
        user: Images.man,
    },
];
const OvalProgressBar = ({ progress }) => {
    const width = 35;
    const height = 40;
    const strokeWidth = 5;
    const centerX = width / 2;
    const centerY = height / 2;

    const horizontalRadius = (width - strokeWidth) / 2;
    const verticalRadius = (height - strokeWidth) / 2;

    const fullCircumference = 2 * Math.PI * Math.sqrt((horizontalRadius * horizontalRadius + verticalRadius * verticalRadius) / 2);
    const progressValue = fullCircumference * (1 - progress);
    const percentage = Math.round(progress * 100);
    return (
        <Svg height={height} width={width}>

            <Ellipse
                cx={centerX}
                cy={centerY}
                rx={horizontalRadius}
                ry={verticalRadius}
                fill="transparent"
                stroke="#D9D9D9"
                strokeWidth={strokeWidth}
            />

            <Ellipse
                cx={centerX}
                cy={centerY}
                rx={horizontalRadius}
                ry={verticalRadius}
                fill="transparent"
                stroke="#DA423C"
                strokeWidth={strokeWidth}
                strokeDasharray={`${progressValue},${fullCircumference}`}
                strokeLinecap="butt"
            />

            <Text
                style={styles.text}
                x={centerX}
                y={centerY}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="#DA423C"
                fontSize="10"

            >
                {`${percentage}%`}
            </Text>
        </Svg>
    );
};

const Leaderboard = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <OvalProgressBarItem item={item} />

        </View>

    );
    
const OvalProgressBarItem = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MyProgress')}
            style={styles.flatlist}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.img} style={{}} />

                <Image source={item.user} style={{ marginStart: 10, resizeMode: 'cover', height: 40, width: 42, borderRadius: 12, }} />
                <RNText style={styles.text}>{item.text}</RNText>
            </View>
            <OvalProgressBar progress={item.progress} />
        </TouchableOpacity>
    );
};
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <Header
                back={Images.back}
                isCenterShown
                centerText={'Leaderboard'}
                Header={'Travel the World'}
                LowerText={'9 friends are participating in this missions'}
            />
            <View style={{ flex: 1, marginTop: 30, }}>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.container}
                />
            </View>
        </View>
    )
}

export default Leaderboard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    flatlist: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#fff',
        paddingVertical: 6,

        borderRadius: 4,
    },
    progressBarContainer: {

    },
    text: {
        fontWeight: '500',
        color: '#000',
        fontSize: 13,
        marginStart: 10
    },
    btmtext: {
        color: '#000',
        fontSize: 11,
    }
});
