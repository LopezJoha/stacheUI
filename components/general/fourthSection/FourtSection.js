import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import FaqList from './FaqList';

const FourthSection =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <HeadingText align='center'
                            size = {SIZES.xxLarge}                        
                            beforeLettering = "Frequently Asked Question"/>
            </View>           
            
            <FaqList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
        backgroundColor: COLORS.background3, 
        flexDirection: 'column', 
        padding: '2.5%'
    },
    textContainer:{
        paddingVertical:'5%'
    }
})

export default FourthSection;