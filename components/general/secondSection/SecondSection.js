import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import { images } from '../../../constants';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../../constants';


const SecondSection = (props) => {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={images.why2}  style={styles.imageBackground}
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
      {/*
        <HeadingText beforeLettering = "For example, "  
                      lettering = <Lettering textLettering = " why "/> 
                      afterLettering  = "do you need a marketplace to sell your NFTs?"                                        
          />*/}
        
      
      </ImageBackground>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background3
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
   height: '30%',
   width:'100%', 
   height:'55%',
   
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    
    
   
  },
});

export default SecondSection;

