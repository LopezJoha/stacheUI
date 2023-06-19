import React from 'react';
import { ImageBackground, TouchableOpacity, Text, Image, View, TextInput } from 'react-native';
import CardsList from './CardsList';


const ThirdSection = (props) => {
    const styles = StyleSheet.create({     
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
    
      const textStyle = active ? styles.text1 : styles.text2;



    //Debo pasar las siguientes propiedades
    return (
        <View style={{paddingTop:300}}>
            <HeadingText beforeLettering = "Enter"  
                        lettering = <Lettering textLettering = "Stache"/>                                                                 
            />
            <CardsList 
                onPressCard={props.handlePressCard}                        
                activeCardId={props.active}
                activeCard={props.styles.activeCard} 
                inactiveCard={props.styles.inactiveCard}
                />
                

        </View> 
    );
}

export default ThirdSection;