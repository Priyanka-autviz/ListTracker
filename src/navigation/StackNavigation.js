import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigation from './BottomTabNavigation'
import User from '../screens/User';
import Home from '../screens/Home';
import Leaderboard from '../screens/Leaderboard';
import CreateList from '../screens/CreateList';
import MyProgress from '../screens/MyProgress';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forget from '../screens/Forget';
import VerifyNumber from '../screens/VerifyNumber';
import Onboarding from '../screens/Onboarding';
import ConfirmPassword from '../screens/ConfirmPassword';
import VerifyEmail from '../screens/VerifyEmail';

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' },
            }}
            initialRouteName='Onboarding'>
            <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Forget' component={Forget} />
            <Stack.Screen name='VerifyNumber' component={VerifyNumber} />
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} />
            <Stack.Screen name='VerifyEmail' component={VerifyEmail} />

        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer
        >
            <StackNavigation />
        </NavigationContainer>
    )
}
export default App;