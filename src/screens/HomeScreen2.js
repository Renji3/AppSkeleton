import * as React from 'react';
import { connect } from "react-redux"; 

import { View, Text, Button  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { openHomeScreen, openPopup } from "../actions/navActions.js";


function HomeScreen2(props) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 2 {"\n" + props.test}</Text>
      <Button
        onPress={ () => { props.navigation.dispatch(openPopup(props.navigation)) } }
        title="Open Popup"
        color="#F00"
      />
    </SafeAreaView>
  );
}

export default connect((store) => {
  return {
    test: store.dummyReducer.textValue,
  };
})(HomeScreen2);
