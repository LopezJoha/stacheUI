import React, { useEffect, useRef }from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from "../../../constants";
import { LinearGradient } from 'expo-linear-gradient';
const  Card = (props) => {  
    
  return(
   
    <TouchableOpacity style={[props.id === props.activeCard ? styles.activeCard: styles.inactiveCard]} 
                      onPress={props.onPress}>     
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
                      backgroundSize: props.id === 4 ?   '50%' : 'contain',
                      margin: props.id === 3 ? 0 : 20,
                      marginTop: props.id === 4 ? 70 : 20
                      }]}>          
        </View> 
      
        <View style={styles.absoluteContainer}>
              <LinearGradient
              colors={['rgba(27, 26, 26, 0.1)', 'rgba(27, 26, 26, 1)', 'rgba(27, 26, 26, 1)']}
                start={{x:0, y:0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}
              />
        </View>

        <View style={[styles.textContainer]}>      
          <Text style={[styles.title, 
                      {display: props.id === props.activeCard ? 'flex': 'none'}]}>{props.title}</Text>
          <Text style={[styles.subtitle,
                    {display: props.id === props.activeCard ? 'flex': 'none'}]}>{props.subtitle}</Text>                  
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
    minWidth: '100%', 
    textAlign: 'left',
    alignContent: 'center',
    justifyContent: 'center', 
    alignSelf:'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'contain',
    margin:20
    
  },
  absoluteContainer: {
    position: 'absolute',
    bottom:0,
    left: 0,
    right: 0,
    width:'100%', 
    height:'45%',
    marginBottom:'10%'
    
   },
  gradient:{
    flex:1
  },
  gradientContainer: {
    borderRadius: 10, // Ajusta el valor según tus preferencias
    overflow: 'hidden',
  },
  gredient: {   
  borderRadius:20,

  },  
  textContainer:{
   ...StyleSheet.absoluteFillObject,
    width: '100%', 
    height:'50%',
    bottom:0,
    paddingTop: '50%',
    padding: 20,
    gap:10
  },
  title:{
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.medium,
    fontWeight: 600,
    color: 'white', 
    textAlign:'justify'
  }, 
  subtitle:{
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.xxMedium,
    color: 'white', 
   
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
    borderColor: COLORS.primary,
    borderRadius:20,
    minHeight: 450 ,
    padding:'2.5%'  
    
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
    minHeight: 450,
    padding:'2.5%'
  },
});

export default Card;