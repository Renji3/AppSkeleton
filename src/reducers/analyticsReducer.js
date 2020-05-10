import * as FirebaseAnalytics from 'expo-firebase-analytics';
import Constants from 'expo-constants';

import { getActiveScreen } from "../helperFunctions/navHelpers.js";

const INITIAL_STATE = {
  navState: [],
  deactivateAnalytics: true,
};

//TODO UNComment Firebase Analyctics once set Up in configs
//see https://docs.expo.io/versions/latest/guides/setup-native-firebase

export default function reducer(state=INITIAL_STATE , action) {
  switch (action.type) {
    case "NAV_STATE_CHANGED":{
      let activeScreen =  getActiveScreen(action.payload.navState);
      //TODO
      //FirebaseAnalytics.setCurrentScreen(activeScreen, activeScreen);
      return {...state,
        navState: action.payload.navState,
      }
    }
    case 'persist/REHYDRATE': {
      let payload = {};
      if (action.payload && action.payload.analyticsReducer){
        payload = action.payload.analyticsReducer;
      }

      //TODO
      //FirebaseAnalytics.setUserId(Constants.installationId);
      //FirebaseAnalytics.setAnalyticsCollectionEnabled(!payload.deactivateAnalytics);
      if ( Constants.appOwnership == "expo" ){
        //TODO
        //FirebaseAnalytics.setDebugModeEnabled(true);
      }

      return {...state,
        deactivateAnalytics: payload.deactivateAnalytics || INITIAL_STATE.deactivateAnalytics,
      }
    }

  }
  return state;
}
