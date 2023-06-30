import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import HeadingText from '../../home/main/HeadingText';
import Lettering  from '../../home/main/lettering';
import { COLORS, SIZES, images } from '../../../constants';
import GeneralText from '../generalText';
import { LinearGradient } from 'expo-linear-gradient';


const subtitle = 'Right now, selling NFTs without a marketplace or middleman is practically impossible. If crypto is about true ownership, why is something so simple so hard?'

const SecondSection = (props) => {
  
  return (
    <View style={styles.container}>        
      <ImageBackground  source={images.why2}  
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle}> 
        
        <View style={styles.overlayContainer}>
          <View style={styles.absoluteContainer}>
            <LinearGradient
              colors={['rgba(28, 28, 28, 0.1)', 'rgba(28, 28, 28, 1)', 'rgba(21, 21, 21, 0.3)']}
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
                      differentText=<Lettering textLettering='Why' bg={COLORS.background3}/>
                      afterLettering  = " do you need a marketplace to sell your NFTs?"                                        
          />
          <View style={styles.generalTextContainer}>
          <GeneralText align='center'
                       text={subtitle}
                       size = {SIZES.xxxMedium}
          />
          </View>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{    
    backgroundColor: COLORS.background3, 
    alignContent:'center',
    justifyContent:'center',   
  },
  containerText:{
    maxWidth: '60%',
    position:'absolute',
    top: '15%',
    alignSelf:'center', 
  },
  imageBackground: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop:'5%'
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
  generalTextContainer:{
    paddingVertical:'3%',
    width:'90%',
    alignSelf:'center'
  }
});

export default SecondSection;

