import { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import ScreenHeaderIcon from '../components/home/header/ScreenHeaderIcon';
import StyledButton from '../components/general/StyledButton';
import MainSection from '../components/general/firstSection/MainSection';
import SecondSection from '../components/general/secondSection/SecondSection';
import ThirdSection from '../components/general/thirdSection/ThirdSection';
import FourthSection from '../components/general/fourthSection/FourtSection';
import FifthSection from '../components/general/fifthSection/FifthSection';
const floatTetxt = 'Help \n us build \n the future!'

const Home= ()=>{
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);   

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      <SafeAreaView style={[styles.container, {flex: 1, backgroundColor: COLORS.background1, }]}>
      
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

      <View style={styles.screenContainer}>
        <TouchableOpacity
                  style={[
                  styles.fixedElement,
                  isHovered ? styles.buttonHovered : null,
                  ]}
                  onPress={() => console.log('Button pressed')}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                  <ImageBackground source={isHovered ? require('../assets/images/disYell.png') : 
                                                       require('../assets/images/disBlack.png')}
                                    style={[styles.imageBackground]}
                                    imageStyle={styles.imageStyle}
                  >
                  <Text style={styles.buttonText}>{floatTetxt}</Text>
                  <View style={{paddingLeft:65}}>
                    <StyledButton image={<Image source={require('../assets/images/discord.png')}
                                            style={styles.image}></Image>} 
                                            buttonText='Join Discord'
                                            alignS='center'
                                            width ={100}
                                            padding={0}
                    />
                  </View>
                  </ImageBackground>
                  
              </TouchableOpacity>

            <ScrollView showsHorizontalScrollIndicator={false}>         
              <MainSection/> 
              <SecondSection/>
              <ThirdSection/>
              <FourthSection/>  
              <FifthSection />  
            </ScrollView>
            
        </View>
      
      </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({  
  imageBackground:{
    flexDirection:'column',
    alignContent:'flex-end', 
    justifyContent:'flex-end', 
    
  },  
  imageStyle:{

  },
  buttonText: {
    fontFamily:'SatoshiRegular',
    fontSize: 20, 
    color: 'white',
    height:'90%',    
    alignSelf: 'flex-end',
    textAlign:'right',
    lineHeight:'150%',
    paddingTop: 60, 
    paddingLeft: 110,
   
  },
  screenContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  fixedElement: {
    position: 'absolute',
    bottom: 50,
    right: 40,
    backgroundColor: 'transparent',   
    zIndex:10,    
  },  

  
});

export default Home;