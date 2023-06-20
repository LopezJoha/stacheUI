import { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import ScreenHeaderIcon from '../components/home/header/ScreenHeaderIcon';
import StyledButton from '../components/general/StyledButton';
import MainSection from '../components/general/firstSection/MainSection';
import SecondSection from '../components/general/secondSection/SecondSection';
import ThirdSection from '../components/general/thirdSection/ThirdSection';


const Home= ()=>{
    const router = useRouter();    
    
            
    const renderHeaderLeft = () => (
        <View style={{ paddingLeft: '25%', paddingTop: 70 }}>
            <ScreenHeaderIcon iconUrl={images.logo}/>
        </View>
      );
          
      const renderHeaderRight = () => (
        <View style={{ paddingRight: '3%', paddingTop: '7%' }}>
          <StyledButton buttonText = 'Launch Stache'/>
        </View>
      );   
      

    return(
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background1, }}>
        <Stack.Screen
          options={{                
              headerStyle : {
                backgroundColor: COLORS.background1,
                height:100, 
                                          
                },
              headerShadowVisible: false, 
              headerLeft : renderHeaderLeft,
              headerRight: renderHeaderRight,
              headerTitle: "",                                        
          }}
        />        
            
        <ScrollView showsHorizontalScrollIndicator={false}>         
          <MainSection/> 
          <SecondSection/>
          <ThirdSection/>
        </ScrollView>
      </SafeAreaView>
        
    );
}

export default Home;