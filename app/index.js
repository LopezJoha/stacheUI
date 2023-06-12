import { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import Lettering  from '../components/home/main/lettering';
import HeadingText from '../components/home/main/HeadingText';
import ScreenHeaderIcon from '../components/home/header/ScreenHeaderIcon';
import StyledButton from '../components/general/StyledButton';
import Card from '../components/home/main/Card';

const Home= ()=>{
    const router = useRouter();
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
      setIsPressed(!isPressed);
    };
    
    const renderHeaderLeft = () => (
        <View style={{ paddingLeft: '50%', paddingTop: 50 }}>
            <ScreenHeaderIcon iconUrl={images.logo}/>
        </View>
      );
          
      const renderHeaderRight = () => (
        <View style={{ paddingRight: '5%', paddingTop: 50 }}>
          <StyledButton buttonText = 'Get Started'/>
        </View>
      );
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background1, padding: '5%'}}>
        <Stack.Screen
                options={{                
                    headerStyle : {
                        backgroundColor: COLORS.background1,                    
                    
                    },
                    headerShadowVisible: false, 
                    headerLeft : renderHeaderLeft,
                    headerRight: renderHeaderRight,
                    headerTitle: "",                                        
                }}
                />
        
            
            <ScrollView showsHorizontalScrollIndicator={false}> 
            {// Esto es el cuerpo de la app
            }
            
            <HeadingText beforeLettering = "Why do you need a"  
                         lettering = <Lettering textLettering = "marketplace"/> 
                         afterLettering  = "to sell your NFTs?"                                        
            />
            <HeadingText beforeLettering = "For"  
                         lettering = <Lettering textLettering = "example"/>                                                                 
            />
            <HeadingText beforeLettering = "Example without Lettering"                                                             
            />

                   
             <Card funcion = {handlePress} isPress = {isPressed}/>

            </ScrollView>
        </SafeAreaView>
        
    );
}

export default Home;