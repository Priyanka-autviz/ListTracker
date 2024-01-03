
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './src/screens/Dashboard'
import {store} from './src/redux/store';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
const App = () => {
  return (
    <Provider store={store}>
 <StackNavigation />
 </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

// import { FlatList, PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Contacts from 'react-native-contacts';



// const App = () => {
//   const [contacts, setContacts] = useState([])
//   useEffect(() => {
//     getPermissions();
//   }, [])
//   const getPermissions = () => {
//     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//       title: 'Contacts',
//       message: 'This app would like to view your contacts.',
//       buttonPositive: 'Please accept bare mortal',
//     })
//       .then((res) => {
//         if (res == 'granted') {
//           console.log('Permission: ', res);
//           Contacts.getAll()
//             .then((con) => {
//               // work with contacts
//               console.log(con);
//               setContacts(con);
//             })
//             .catch((e) => {
//               console.log(e);

//             })
//             .catch((error) => {
//               console.error('Permission error: ', error);
//             })
//         }
//       });
//   }


//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList data={contacts}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={{ width: '100%', height: 130, alignSelf: 'center', borderWidth: 1, marginTop: 10 }}>
//               <Text>{item.displayName}</Text>
//               {item.phoneNumbers.map((phoneNumber, index) => (
//                 <Text key={index} style={{ color: '#fff' }}>{phoneNumber.number}</Text>
//               ))}
//             </View>
//           )
//         }}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})