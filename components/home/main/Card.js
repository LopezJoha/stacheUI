import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import styles from './Card.style';

const  Card = (props) => {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: props.isPress ? 'red' : 'blue',
    },
    button: {
      backgroundColor: props.isPress ? 'blue' : 'red',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress = {props.funcion} >
      <Text style={styles.text}>
      {props.number}
      </Text>
     <View>
        
     <Text style={styles.tex}>
        {props.text}
        </Text>
        <Text></Text>
     </View>     
    </TouchableOpacity>
  );
}

export default Card;