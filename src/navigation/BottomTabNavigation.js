
import React, { useRef, useState } from 'react';
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
import Friends from '../screens/Friends';
import { ScrollView, useScrollToTop } from '@react-navigation/native';
import FriendsList from '../screens/FriendsList';
import SelectImage from '../screens/SelectImage';
import AddFriends from '../screens/AddFriends';
import ShowPhotos from '../screens/ShowPhotos';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const UserStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
    }}  >
         <Stack.Screen name="Friends" component={Friends} />
         <Stack.Screen name="FriendsList" component={FriendsList} />
      
        <Stack.Screen name="MyProgress" component={MyProgress} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
       
        <Stack.Screen name="SelectImage" component={SelectImage} />
    </Stack.Navigator>
);
const DashboardStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' }
    }} >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Missions" component={Missions} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="ShowPhotos" component={ShowPhotos} />
        <Stack.Screen name="CreateList" component={CreateList} />
       
        <Stack.Screen name="AddFriends" component={AddFriends} />
        <Stack.Screen name="SelectImage" component={SelectImage} />
        <Stack.Screen name="MyProgress" component={MyProgress} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
    
    </Stack.Navigator>
)


const BottomTabNavigation = () => {
    const scrollRef = useRef(null);
    const [hideTabBar, setHideTabBar] = useState(false);
      useScrollToTop(scrollRef);

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="red"
            inactiveColor="white"
            screenOptions={{
                tabBarVisible: !hideTabBar,
                tabBarStyle: {
                
                    backgroundColor: '#3CDA91',
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
                                justifyContent: 'center',
                            }}
                        >
                            <Image source={Images.home} style={{ height: 20, width: 20, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />
            {/* <Tab.Screen
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
                                justifyContent: 'center',
                                height: 37,
                                width: 66,
                                alignItems: 'center',

                            }}
                        >
                            <Image source={Images.target} style={{ height: 20, width: 20, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            /> */}
            <Tab.Screen
                name="FriendsList"
                component={UserStack}
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
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                        >
                            <Image source={Images.frnds} style={{ height: 20, width: 20, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="AddFriends"
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
                                justifyContent: 'center'
                            }}
                        >
                            <Image source={Images.check} style={{ height: 24, width: 24, tintColor: focused ? '#000' : 'white' }} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation