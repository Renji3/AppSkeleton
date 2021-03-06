import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux"; //Gets the data from the store and pushes them into the this.props of the component
import { Dimensions, StyleSheet, View, Text, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function Loading( { ...props} ){

  return(
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems:"center"}}>
      <Text>Loading</Text>
    </SafeAreaView>
  )
}

export default connect((store) => {
  return {
    checkingLogin: store.authReducer.checkingLogin,
  };
}, null , (stateProps, dispatchProps, ownProps) => ({...stateProps, ...dispatchProps, ...ownProps}))(Loading);


