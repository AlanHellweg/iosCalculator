import React from 'react';
import BottomTabs from './presentation/navigators/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
