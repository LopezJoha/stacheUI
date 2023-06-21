import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from "../../../constants";

const  Card = (props) => {  

  return (
    <TouchableOpacity style={[props.style,
                            ]} 
                      onPress={props.onPress} >
      
      <Text style={[styles.textNumber,
                  {left: props.id === props.activeCard ? '5%': ''}]}>
                  {props.number}
      </Text>          
      <Text style={[styles.text, 
                  {display: props.id === props.activeCard ? 'none': 'flex'}]}>
                  {props.text}
      </Text>
      <View style={[styles.overlay,
                    {backgroundImage: props.id === props.activeCard ? props.image : 'none', 
                    }]}
      >

      </View>      
       
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {      
    
  },
  textNumber:{
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    position: 'absolute', 
    top: '7%',  
    zIndex:10     
  },     
  text:{
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.medium,
    color: 'white', 
    maxWidth: '70%', 
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center', 
    alignSelf:'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundSize: 'auto', 
    width: '100%', 
    height:'70%',
    top:'2.5%',
    left:0,
    right:0
  },
  imageBackground: {
    
  },
  imageStyle: {
     
  },
});

export default Card;