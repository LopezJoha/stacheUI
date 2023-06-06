//import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import Lettering  from '../components/home/main/lettering';
import HeadingText from '../components/home/main/HeadingText';
import ScreenHeaderIcon from '../components/home/header/ScreenHeaderIcon';
import StyledButton from '../components/general/StyledButton';
const Home= ()=>{
    const router = useRouter();
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background1}}>            
        <Stack.Screen
        //Esto es el header de la app !!
            options={{
                headerStyle : {
                    backgroundColor: COLORS.background1,
                },
                headerShadowVisible: false, 
                headerLeft : ()=>(<ScreenHeaderIcon iconUrl={images.logo}/>),
                headerRight: ()=>(<StyledButton/>),
                headerTitle: ""        
            }}
            />
            <ScrollView style={{height: 1000}}> 
            {// Esto es el cuerpo de la app
            }
            <HeadingText beforeLettering = "You probably don't know what a smart"  
                         lettering = <Lettering textLettering = "wallet"/> 
                         afterLettering  = "can do"                                        
            />                     
            <HeadingText beforeLettering = "Why do you need a"  
                         lettering = <Lettering textLettering = "marketplace"/> 
                         afterLettering  = "to sell your NFTs?"                                        
            />
            <HeadingText beforeLettering = "For"  
                         lettering = <Lettering textLettering = "example"/>                                                                 
            />
            <HeadingText beforeLettering = "Example without Lettering"                                                             
            />
            </ScrollView>
        </SafeAreaView>
        
    );
}

export default Home;