import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Home from '@/components/home/index';
import SignIn from '@/components/Login/screens/SignIn';
import Menu from '@/components/menu/index';
import Instractions from '@/components/how-to-play/index';
import LeaderBoard from '@/components/my-leagues/index';
import Edit from '@/components/edit_profile/index';
import Splashscreen from '@/components/splash_screen/index';
import Footer from "@/components/footer/index"
const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'nova': require('../assets/fonts/Fontspring-DEMO-proximanovacond-bold.otf'),
        
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'simple_push',
          }}
          initialRouteName="splash-screen"
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="sign-in" component={SignIn} />
          <Stack.Screen name="menu" component={Menu} />
          <Stack.Screen name="how-to-play" component={Instractions} />
          <Stack.Screen name="my-leagues" component={LeaderBoard} />
          <Stack.Screen name="edit-profile" component={Edit} />
          <Stack.Screen name="splash-screen" component={Splashscreen} />
        </Stack.Navigator>
        {/* <Footer/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
