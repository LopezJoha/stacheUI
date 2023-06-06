import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout= ()=>{
    
    const [fontsLoaded] = useFonts({
        SatoshiRegular: require('../assets/fonts/Satoshi-Regular.ttf'),
        SatoshiBold: require('../assets/fonts/Satoshi-Bold.ttf'),
        SatoshiItalic: require('../assets/fonts/Satoshi-Italic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    
    
    return(
        <Stack onLoyout = {onLayoutRootView}/>
    );
}

export default Layout;