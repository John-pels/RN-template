import {StatusBar} from 'expo-status-bar';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from 'expo';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {Root} from 'native-base';
import {RootState} from './src/redux/root-reducer';

const customFonts = {
  'SFProText-Bold': require('./src/assets/fonts/SFProText-Bold.ttf'),
  'SFProText-Regular': require('./src/assets/fonts/SFProText-Regular.ttf'),
  'SFProText-Light': require('./src/assets/fonts/SFProText-Light.ttf'),
};
export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const initState = useCallback(async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      ...customFonts,
    });
    setIsReady(true);
  }, [Font]);

  useEffect(() => {
    initState();
  }, [initState]);

  if (!isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Root>
            <NavigationContainer theme={theme}>
              <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!!!!</Text>
                <StatusBar style="auto" />
              </View>
            </NavigationContainer>
          </Root>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
