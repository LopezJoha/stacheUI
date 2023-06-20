import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import HeadingText from '../../home/main/HeadingText';
import Lettering  from '../../home/main/lettering';
import { COLORS, SIZES, images } from '../../../constants';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';
import { LinearGradient } from 'expo-linear-gradient';


const subtitle = 'Right now, selling NFTs without a marketplace or middleman is practically impossible. If \n crypto is about true ownership, why is something so simple so hard?'

const SecondSection = (props) => {
  
  return (
    <View style={styles.container}>        
      <ImageBackground  source={images.why2}  
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle}> 
        
        <View style={styles.overlayContainer}>
          <View style={styles.absoluteContainer}>
            <LinearGradient
              colors={['rgba(40, 40, 40, 0.1)', 'rgba(40, 40, 40, 1)', 'rgba(40, 40, 40, 1)']}
              start={{x:0, y:0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}
            />
          </View>
        </View>
      </ImageBackground>  
      <View style={styles.containerText}>
          <HeadingText align='center'
                      size = {SIZES.xxLarge}

                      beforeLettering = "For example, "  
                      differentText=<Lettering textLettering=' why '/>
                      afterLettering  = " do you need a marketplace to sell your NFTs?"                                        
          />
          <GeneralText align='center'
                       text={subtitle}
          />
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background3, 
    alignContent:'center',
    justifyContent:'center',
    paddingTop: '5%'
    
  },
  containerText:{
    maxWidth: '65%',
    position:'absolute',
    top: '15%',
    alignSelf:'center',
    
    
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageStyle: {
    opacity: 0.7, // Ajusta la opacidad de la imagen de fondo
  },
  overlayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingTop:'55%',
    marginTop:'15%', 
  },
  absoluteContainer: {
   position: 'absolute',
   bottom:0,
   left: 0,
   right: 0,
   width:'100%', 
   height:'55%',
   
  },
  gradient: {
    flex: 1,   
  },
});

export default SecondSection;

