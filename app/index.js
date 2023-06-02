//import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants'
import Lettering  from '../components/lettering';

const Home= ()=>{
    const router = useRouter();
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>            
        <Stack.Screen
        //Esto es el header de la app !!
            options={{
                headerStyle : {
                    backgroundColor: COLORS.primary,
                },
                headerShadowVisible: false, 
                headerTitle: ""        
            }}
            />
            <ScrollView> 
            {// Esto es el cuerpo de la app
            }
                <View>
                    <Lettering/>
                </View>   
            </ScrollView>
        </SafeAreaView>
        
    );
}

export default Home;