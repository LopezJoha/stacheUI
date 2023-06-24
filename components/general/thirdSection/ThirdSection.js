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
              
              
            /> }
        </View>   
      </View>
    );
}

const styles = StyleSheet.create({    
  container:{
    backgroundColor: COLORS.background3,     
    height: '150%'
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
    flex: 5,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 2, 
    //borderColor: COLORS.primary,
    borderRadius:20,
    minHeight: 450   
    
  },
  inactiveCard : {
    backgroundColor: COLORS.cardBackground,
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 2, 
    borderColor: COLORS.buttonBorder,
    borderRadius:20,
    minHeight: 450
  },

});

export default ThirdSection;

