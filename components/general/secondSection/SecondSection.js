import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';



const SecondSection = (props) => {
  const backgroundImg = {uri: '../../../assets/images/introBg.png'};
  const mainImg = {uri: '../../../assets/images/intro.png'};
  const discord = {uri: '../../../assets/images/discord.png'}
  return (
    <View>
        <HeadingText beforeLettering = "Why do you need a"  
                      lettering = <Lettering textLettering = "marketplace"/> 
                      afterLettering  = "to sell your NFTs?"                                        
          />
          <HeadingText beforeLettering = "For"  
                      lettering = <Lettering textLettering = "example"/>                                                                 
          />
    </View>
  )
}

export default SecondSection;

