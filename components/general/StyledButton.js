import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styledButton.style';


const StyledButton = (props) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, {padding:props.padding, alignSelf: props.alignS, width: props.width}]}>
        {props.image}
       <Text style={[styles.btnText]}>{props.buttonText}</Text>
        
    </TouchableOpacity>
  )
}

export default StyledButton;