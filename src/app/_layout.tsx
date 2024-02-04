import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync();



export default function RootLayout(){
    const [fontsLoaded, fontError] = useFonts({
        Inter:Inter_900Black,
        Amatic:AmaticSC_400Regular,
        AmaticBold:AmaticSC_700Bold,
      });
      
     useEffect(()=>{
      if (fontsLoaded || fontError){
        SplashScreen.hideAsync();
      }  
     }, [fontsLoaded, fontError] ); 
    
     if (!fontsLoaded && !fontError){
      return null;
    } 
    return (
    <Stack screenOptions={{title: 'DEVember',headerStyle: {backgroundColor:'red'},}}>
        <Stack.Screen name='index' options={{title:'DEVember'}}/>
    </Stack>    
    );
}