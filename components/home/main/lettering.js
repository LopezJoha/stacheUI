import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './lettering.style';
import { COLORS } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';


const Lettering=props=>{
    const router = useRouter();
    return(
        <View style={styles.containerLinear}>
                <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary]}                    
                    style={styles.grediant}
                    >
                    <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{props.textLettering}</Text>
                    
                    </TouchableOpacity>
                </LinearGradient>
            </View>
    );
}


export default Lettering;