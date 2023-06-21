import React, { useState} from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput, StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import GeneralText from '../generalText';
import GradientText from '../../home/main/GradientText';
import CardsList from './CardsList';
const subtitle = "Stache is a smart account that acts like an agent on your behalf. Being programmable and \n on-chain means your Stache can do things that your wallet can't. Directly selling your NFTs \n is just the beginning..."
             
const ThirdSection = () => {   
  const [active, setActive] = useState(1);  
       
    function handlePressCard(id){
      setActive(id);        
    }
  
    return (   
        <View style={styles.container}>
          <View style={styles.containerText}>
              <HeadingText align='center'
                           size = {SIZES.xxLarge}                        
                           beforeLettering = "Enter"  
                           differentText = <GradientText textGradient=" Stache "/>
                                                                
              />
              <GeneralText align='center'
                           text={subtitle} />
          </View> 
        <View style={styles.cardListContainer}>
        {<CardsList 
              onPressCard={handlePressCard}                        
              activeCardId={active}                      
              activeCard = {styles.activeCard}
              inactiveCard = {styles.inactiveCard}
              
            /> }
        </View>   
      </View>
    );
}

const styles = StyleSheet.create({    
  container:{
    backgroundColor: COLORS.background3,     
    height:300    
  },
  containerText:{
    maxWidth: '65%',
    alignSelf:'center',
    gap:'12%', 
    paddingBottom:'5%'
  }, 
  cardListContainer:{
    paddingHorizontal:'2.5%',
    
  },
  activeCard :  {
    fontFamily: 'SatoshiRegular',
    backgroundColor: COLORS.cardBackground,
    flex: 3,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 2, 
    borderColor: COLORS.primary,
    borderRadius:20,
    minHeight: 400      
    
  },
  inactiveCard : {
    backgroundColor: COLORS.cardBackground,
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 2, 
    borderColor: COLORS.buttonBorder,
    borderRadius:20,
    minHeight: 400
  },
  showImgContainer:{
    flex: 1,
    height: '100%',
    width: '98%',
  }, 
  hideImgContainer:{
  display: 'none',
  }
});

export default ThirdSection;

