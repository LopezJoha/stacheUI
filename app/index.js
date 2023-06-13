import { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import Lettering  from '../components/home/main/lettering';
import HeadingText from '../components/home/main/HeadingText';
import ScreenHeaderIcon from '../components/home/header/ScreenHeaderIcon';
import StyledButton from '../components/general/StyledButton';
import CardsList from '../components/general/thirdSection/CardsList';
import { CardsInfo } from '../components/Data/CardsInfo';
import MainSection from '../components/general/firstSection/MainSection';

const Home= ()=>{
    const router = useRouter();
    const [active, setActive] = useState(1); 
    
    
    function handlePressCard(id){
      setActive(id);          
      console.log(active + " active  ");
    }

        
    const renderHeaderLeft = () => (
        <View style={{ paddingLeft: '25%', paddingTop: 50 }}>
            <ScreenHeaderIcon iconUrl={images.logo}/>
        </View>
      );
          
      const renderHeaderRight = () => (
        <View style={{ paddingRight: '5%', paddingTop: 50 }}>
          <StyledButton buttonText = 'Launch Stache'/>
        </View>
      );

      const styles = StyleSheet.create({     
        activeCard :  {
          flex: 1,
          flexDirection: 'column',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',      
          borderWidth: 4, 
          borderColor: COLORS.primary,
          width: 700      
          
        },
        inactiveCard : {
          flex: 1,
          flexDirection: 'column',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',      
          borderWidth: 2, 
          borderColor: COLORS.secondary,
          maxWidth: 200
        },
      });
    
      const textStyle = active ? styles.text1 : styles.text2;

    return(
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background1, paddingHorizontal: '2.5%'}}>
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

        <MainSection />        
          
          
          <CardsList 
              onPressCard={handlePressCard} 
              active={active} 
              info={CardsInfo} 
              textStyle={textStyle}
              activeCardId={active}
              activeCard={styles.activeCard} 
              inactiveCard={styles.inactiveCard}
              />

        </ScrollView>
      </SafeAreaView>
        
    );
}

export default Home;