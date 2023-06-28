import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput } from 'react-native';
import Lettering  from '../../home/main/lettering';
import HeadingText from '../../home/main/HeadingText';
import StyledButton from '../StyledButton';
import GeneralText from '../generalText';
import styles from './MainSection.style';
import { images } from '../../../constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GradientText from '../../../components/home/main/GradientText';

const texto = "Experience the first-ever platform that hands you the reins to your personal NFT shop. Say goodbye to marketplace fees and restrictions. Curate your unique collection and connect directly with buyers for a more social trading experience.."

const MainSection = (props) => {
    
  return (
    <View style={[styles.container,]}> 
      <ImageBackground source={images.introBg} resizeMode="center" style={{flex: 1, marginBottom:300}}>        
      </ImageBackground> 
            
      <View style={[styles.box, {paddingLeft:'2.5%'}]}>
          <View style={[styles.inner, {justifyContent:'flex-start', gap:'5%', }]}>
            <View>
              <HeadingText beforeLettering = "Build Your"  
                                differentText = <GradientText textGradient=" NFT Empire: "/> 
                                afterLettering  = "Create, Customize, and Curate"
                                align = 'auto'                            
                />
            </View>
            <View style={{paddingTop: 30,marginLeft: 130, width: '120%',}}>
                <GeneralText text= {texto} align = 'left'/> 
              </View> 
              <View style={styles.calltheAction}>
                
                <StyledButton buttonText = 'Launch Stache'
                              disp = 'flex'
                />
              </View>           
          </View>                                   
      </View>

      <View style={[styles.box, {paddingTop:30}]}>
        <View style={[styles.inner,{},]}>
          <Image source={images.intro}  style={[{paddingTop:200}]}></Image>
        </View>                      
      </View> 

      <View style={styles.containerFAQ}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textFAQ}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textFAQ}>Join Discord</Text>
          </TouchableOpacity>
        </View>
      </View>         

  </View>  
  
  )
}

export default MainSection;


              
              
