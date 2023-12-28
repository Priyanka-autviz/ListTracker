// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import StackNavigation from './src/navigation/StackNavigation';
// const App = () => {
//   return (
//   <StackNavigation />
//   )
// }

// export default App

// const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './src/screens/Dashboard'
import StackNavigation from './src/navigation/StackNavigation';
const App = () => {
  return (
    <View style={{flex:1}}>
 <StackNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})