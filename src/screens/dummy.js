// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import StackNavigation from './src/navigation/StackNavigation';
// // const App = () => {
// //   return (
// //   <StackNavigation />
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({})
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Dashboard from './src/screens/Dashboard'
// import StackNavigation from './src/navigation/StackNavigation';
// const App = () => {
//   return (
//     <View style={{flex:1}}>
//  <StackNavigation />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


import React, {useState} from 'react';
import {View, Button, Platform, SafeAreaView , StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function App() {
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
};
const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('date');
};
return (
   <SafeAreaView style={styles.container}>
      <View>
         <Button onPress={displayDatepicker} title="Show date picker!" />
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
});


















import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = ({ navigation }) => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShowDate] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setShowDate(false);
    setDate(currentDate);
  };

  const displayDatepicker = () => {
    setShowDate(true);
  };

  const formattedDate = mydate.toLocaleDateString(); // Format the selected date

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={displayDatepicker}>
        <Text>{formattedDate || 'Select Date'}</Text>
      </TouchableOpacity>
      {isDisplayDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={mydate}
          mode={displaymode}
          is24Hour={true}
          display="default"
          onChange={changeSelectedDate}
        />
      )}
    </SafeAreaView>
  );
};

export default Register;
