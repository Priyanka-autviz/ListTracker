import React from 'react';
import { View, FlatList, StyleSheet, Text as RNText, TouchableOpacity } from 'react-native';
import { Svg, Circle, Text } from 'react-native-svg';
import Header from '../common/Header';
import Images from '../components/Images';
import { Fonts } from '../components/Fonts';
import { useNavigation } from '@react-navigation/native';


const data = [
  {
    id: '1',
    text: 'Travel the world ',
    btmtext: "9 friends are participating in this mission",
    progress: 0.5
  },
  {
    id: '2',
    btmtext: "9 friends are participating in this mission",
    text: '2023 Best Picture Oscar Nominees ',
    progress: 0.6
  },
  {
    id: '3',
    text: '2023 Best Picture Oscar Nominees ',
    btmtext: "9 friends are participating in this mission",
    progress: 0.9
  },

  {
    id: '4',
    text: '50 States ',
    btmtext: "9 friends are participating in this mission",
    progress: 0.3
  },
  {
    id: '5',
    btmtext: "9 friends are participating in this mission",
    text: "Marvel Movies (As of 2023) ",
    progress: 0.6
  },
  {
    id: '6',
    btmtext: "9 friends are participating in this mission",
    text: '2023 The New York Times 100 Best Restuarants in NYC ',
    progress: 0.9
  },

  {
    id: '40',
    text: '50 States ',
    btmtext: "9 friends are participating in this mission",
    progress: 0.3
  },
  {
    id: '50',
    btmtext: "9 friends are participating in this mission",
    text: "Marvel Movies (As of 2023) ",
    progress: 0.6
  },
  {
    id: '60',
    btmtext: "9 friends are participating in this mission",
    text: '2023 The New York Times 100 Best Restuarants in NYC ',
    progress: 0.9
  },
];




const Home = () => {
  const navigation = useNavigation();

  const OvalProgressBar = ({ progress }) => {
    const diameter = 40;
    const strokeWidth = 5;
    const radius = (diameter - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressValue = circumference * (1 - progress);
    const percentage = Math.round(progress * 100);

    const textX = diameter / 2;
    const textY = diameter / 2;

    return (
      <Svg height={diameter} width={diameter}>

        <Circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="transparent"
          stroke="#D9D9D9"
          strokeWidth={strokeWidth}
        />


        <Circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="transparent"
          stroke="#DA423C"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressValue}
          strokeLinecap="round"
          transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
        />

        <Text
          x={diameter / 2}
          y={diameter / 2}
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

  const OvalProgressBarItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('User')}
        style={styles.flatlist}>
        <OvalProgressBar progress={item.progress} />
        <View style={{ paddingStart: 20 }}>
          <RNText style={styles.text}>{item.text}</RNText>
          <RNText style={styles.btmtext}>{item.btmtext}</RNText>
        </View>

      </TouchableOpacity>
    );
  };


  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <OvalProgressBarItem item={item} />

    </View>

  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>

        <Header
          showSearch
          Header={'My Missions'}
          back={Images.back}

          info={Images.logout}
          LowerText={'9 friends are participating in this mission'}
          infoOnpress={() => navigation.navigate('Login')}

          img={Images.logout}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  flatlist: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 6,

    borderRadius: 4,
  },
  progressBarContainer: {

  },
  text: {
    color: '#000',
    fontSize: 13,
    fontFamily: Fonts.DroidSans
  },
  btmtext: {
    color: '#000',
    fontSize: 11,
    fontFamily: Fonts.DroidSans
  }
});

export default Home;

