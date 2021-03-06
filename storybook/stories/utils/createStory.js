import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { createTestStore } from "utils/createTestStore.js";

import ScreenContainer from "./ScreenContainer.js";

import WelcomeScreen from "src/screens/Auth/WelcomeScreen.js";

export const createScreenStory = ( areaName, storyName, screen, initalStore ) => {
  let store = createTestStore(initalStore || {}, true)
  let screenContainer = new ScreenContainer( store )
  let Container = screenContainer.getContainer()
  
  storiesOf(areaName, module).add(storyName, () => (<Container>{React.cloneElement(screen)}</Container>) );
  return store;
}



