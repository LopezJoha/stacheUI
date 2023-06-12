import React from 'react';
import {  Text, View } from 'react-native';
import styles from './generalText.style';



const  GeneralText = (props) => {
  return (
    <View style= {styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
    </View>   

  )
}

export default GeneralText;