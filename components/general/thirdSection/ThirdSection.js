import React, { useState} from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput, StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import GeneralText from '../generalText';
import Lettering from '../../home/main/lettering';
import GradientText from '../../home/main/GradientText';
import CardsList from './CardsList';
const subtitle = "Stache is a smart account that acts like an agent on your behalf. Being programmable and \n on-chain means your Stache can do things that your wallet can't. Directly selling your NFTs \n is just the beginning..."
             
const ThirdSection = (props) => {   
  const [active, setActive] = useState(1);  
       
    function handlePressCard(id){
      console.log(id)   
      setActive(id);  
      console.log(id)        
      console.log(active + " active  ");
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
  }, 
  cardListContainer:{
    paddingHorizontal:'5%'
  },
  activeCard :  {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 4, 
    borderColor: COLORS.primary,
    width: 700      
    
  },
  inactiveCard : {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',      
    borderWidth: 2, 
    borderColor: COLORS.secondary,
    maxWidth: 200
  },
});

export default ThirdSection;

