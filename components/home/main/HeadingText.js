import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../main/headingText.style';
import { COLORS } from '../../../constants';


const HeadingText=(props)=>{
    const router = useRouter(props);
    return(
        <View style={styles.container}>
           <Text style= {[styles.title, {textAlign:props.align}]}>
            {props.beforeLettering}
            {props.differentText}
            {props.afterLettering}
           </Text>     
        </View>
    );
}


export default HeadingText;