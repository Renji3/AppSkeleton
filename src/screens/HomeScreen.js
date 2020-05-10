import * as React from 'react';
import { connect } from "react-redux"; 

import { View, Text, Button,} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { openHomeScreen2, openPopup } from "../actions/navActions.js";

import MessageBoxPopup from "../screens/Popups/MessageBoxPopup.js";


function HomeScreen(props) {
  console.log(props)
  return (
    <SafeAreaView style={{backgroundColor:"blue", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {"\n" + props.test}</Text>
      <Button
        onPress={ () => { props.navigation.dispatch(openHomeScreen2()) } }
        title="Open Home Screen 2"
        color="#841584"
      />
      <Button
        onPress={ () => { props.navigation.dispatch(openPopup(props.navigation, popupContent(props) )) } }
        title="Open Popup"
        color="#F00"
      />
    </SafeAreaView>
  );
}

function popupContent(props){
  return (
    <MessageBoxPopup navigation={ props.navigation }/>
  );
}

export default connect((store) => {
  return {
    test: store.dummyReducer.textValue,
  };
})(HomeScreen);
