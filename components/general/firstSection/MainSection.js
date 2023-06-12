import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import styles from './MainSection.style';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';
import { images } from '../../../constants';

const MainSection = (props) => {
  return (
    <View style={styles.container}>
        <HeadingText beforeLettering = "Uncover the power of"  
                         lettering = <Lettering textLettering = "smart accounts"/> 
                         afterLettering  = "you never knew existed..."                                        
            />
        <GeneralText text= "With Solana's high-performance blockchain, our Smart Account system is democratizing crypto, giving you capabilities once exclusive to industry giants."/> 
         <StyledButton buttonText = 'Prueba con Imagen' image =<Image source={images.discord} style ={{height: 30, width: 30}}/>/>
        <StyledButton buttonText = 'Prueba sin Imagen'/>                    
    </View>
  )
}

export default MainSection;