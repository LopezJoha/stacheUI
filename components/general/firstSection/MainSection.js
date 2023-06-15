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

const texto = "With Solana's high-performance blockchain, our Smart Account system is democratizing crypto, giving you capabilities once exclusive to industry giants."

const MainSection = (props) => {
    
  return (
    <View style={[styles.container, {}]}> 
      <ImageBackground source={images.introBg} resizeMode="center" style={{flex: 1, marginBottom:300}}>        
      </ImageBackground> 
            
      <View style={[styles.box, {paddingLeft:'2.5%'}]}>
          <View style={[styles.inner, {justifyContent: 'flex-start', gap:'5%', marginTop:'-10%'}]}>
            <View>
              <HeadingText beforeLettering = "Uncover the power of"  
                                differentText = <GradientText textGradient=" smart accounts "/> 
                                afterLettering  = "you never knew existed..."
                                align = 'auto'                            
                />
            </View>
            <View style={{paddingTop: 30,marginLeft: 130, width: '120%', marginBottom:'3%'}}>
                <GeneralText text= {texto} align = 'left'/> 
              </View> 
              <View style={styles.calltheAction}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#888"
                  onChangeText={props.setTextI}
                  value={props.textI}
                />
                <StyledButton buttonText = 'Join the waitlist'/>
              </View>           
          </View>                                   
      </View>

      <View style={styles.box}>
        <View style={[styles.inner,{},]}>
          <Image source={images.intro}  style={[]}></Image>
        </View>                      
      </View> 

      <View style={styles.faqContainer}>
        <View style={styles.faqContainerInner}>
          <View style={styles.faqButton}>
            <TouchableOpacity>
              <Text>FAQ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.faqButton}>
            <TouchableOpacity>  
              <Text>Join Discord</Text>        
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
      

  </View>  
  )
}

export default MainSection;


              
              
