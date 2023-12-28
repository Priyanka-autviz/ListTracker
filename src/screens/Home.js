import React from 'react';
import { View, FlatList, StyleSheet, Text as RNText } from 'react-native';
import { Svg, Ellipse, Text } from 'react-native-svg';
import Header from '../common/Header';
import Images from '../components/Images';

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

const OvalProgressBar = ({ progress }) => {
  const width = 40;
  const height = 45;
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

const OvalProgressBarItem = ({ item }) => {
  return (
    <View style={styles.flatlist}>
      <OvalProgressBar progress={item.progress} />
      <View style={{ paddingStart: 20 }}>
        <RNText style={styles.text}>{item.text}</RNText>
        <RNText style={styles.btmtext}>{item.btmtext}</RNText>
      </View>

    </View>
  );
};

const Home = () => {
  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <OvalProgressBarItem item={item} />

    </View>

  );

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>

        <Header
          showTextInput
          Header={'My Missions'}
          back={Images.back}
          showProgress
          LowerText={'9 friends are participating in this mission'}

          img={Images.settings}
        />
        <View style={{ flex: 1, marginTop: 60, }}>
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
  },
  btmtext: {
    color: '#000',
    fontSize: 11,
  }
});

export default Home;
