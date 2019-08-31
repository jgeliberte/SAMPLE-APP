/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const showAlert = () => {
  Alert.alert("HELLO");
}

const App = () => {
  return (
    <View style={{ flex: 1, alignContent: 'center', padding: 20}}>
      <View>
        <Text style={{textAlign: 'center'}}>Hello John!</Text>
        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={()=> {showAlert()}}><Text>BEEP</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
