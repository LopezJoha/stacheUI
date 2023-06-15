import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const GradientText=(props)=>{
    
    return(       
        <Text style={styles.styledText}>
           {props.textGradient} 
        </Text>
    );
}

const styles = StyleSheet.create({
    styledText:{
        fontSize: SIZES.xxLarge,
        color: COLORS.primary,            
    }
});

export default GradientText;

