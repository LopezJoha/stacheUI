import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';
import styles from './MainSection.style';
import { images } from '../../../constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MainSection = (props) => {
  const backgroundImg = {uri: '../../../assets/images/introBg.png'};
  const mainImg = {uri: '../../../assets/images/intro.png'};
  const discord = {uri: '../../../assets/images/discord.png'}
  const responsiveHeight = hp('120%');
  const alto = hp('150%'); 
  return (
    <View style={[styles.container, {height: responsiveHeight}]}>        
      <View style={styles.box}>
        <View style={styles.inner}>
          <HeadingText beforeLettering = "Uncover the power of"  
                            lettering = <Lettering textLettering = "smart accounts"/> 
                            afterLettering  = "you never knew existed..."
            />
          <GeneralText text= "With Solana's high-performance blockchain, our Smart Account system is democratizing crypto, giving you capabilities once exclusive to industry giants."/> 
          <StyledButton buttonText = 'Join the waitlist'/>
        </View>                                   
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Image source={images.intro}  style={[]}></Image>
        </View>                      
      </View>

      <View>
        <Image source={images.introBg} resizeMode='cover' style={styles.image}></Image>
      </View>        
       
    </View>
  )
}

export default MainSection;


              
              
