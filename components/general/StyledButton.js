import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styledButton.style';
import { LinearGradient } from 'expo-linear-gradient';

const StyledButton = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
        {props.image}
       <Text style={styles.btnText}>{props.buttonText}</Text>
        
    </TouchableOpacity>
  )
}

export default StyledButton;