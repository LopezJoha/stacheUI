import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import styles from './MainSection.style';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';

const MainSection = (props) => {
  return (
    <View style={styles.container}>
        <HeadingText beforeLettering = "Uncover the power of"  
                         lettering = <Lettering textLettering = "smart accounts"/> 
                         afterLettering  = "you never knew existed..."                                        
            />
        <GeneralText text= "But they're the key to unlocking the true potential of crypto and NFTs. and we're bulding Solanas's first one Stache."/> 
         <StyledButton buttonText = 'Prueba con Imagen' image =<Image source={icons.chevronLeft} style ={{height: 15, width: 15}}/>/>
        <StyledButton buttonText = 'Prueba sin Imagen'/>                    
    </View>
  )
}

export default MainSection;