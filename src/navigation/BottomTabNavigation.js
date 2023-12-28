
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import User from '../screens/User';
import Home from '../screens/Home';
import Images from '../components/Images';
import { createStackNavigator } from '@react-navigation/stack';
import Leaderboard from '../screens/Leaderboard';
import MyProgress from '../screens/MyProgress';
import CreateList from '../screens/CreateList';
import Missions from '../screens/Missions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const UserStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
    }}  >
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="MyProgress" component={MyProgress} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
);
const DashboardStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
    }} >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Missions" component={Missions} />

        <Stack.Screen name="CreateList" component={CreateList} />

    </Stack.Navigator>
)


const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
 initialRouteName="Dashboard"
            activeColor="red"
            inactiveColor="white"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#19C375',
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    marginBottom: 20,
                    borderRadius: 30,
                    elevation: 0,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    }
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardStack}

                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? '#fff' : 'transparent',
                                borderRadius: 50,
                                padding: 5,
                                height: 37,
                                width: 66,
                                alignItems: 'center',

                            }}
                        >
                            <Image source={Images.search} style={{ height: 25, width: 25, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? '#fff' : 'transparent',
                                borderRadius: 50,

                                height: 37,
                                width: 66,
                                alignItems: 'center',

                            }}
                        >
                            <Image source={Images.user} style={{ height: 35, width: 35, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? '#fff' : 'transparent',
                                borderRadius: 50,
                                padding: 5,
                                height: 37,
                                width: 66,
                                alignItems: 'center',

                            }}
                        >
                            <Image source={Images.check} style={{ height: 25, width: 25, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTabNavigation