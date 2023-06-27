import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import FaqList from './FaqList';

const FourthSection =()=>{
    return(
        <View style={styles.container}>
            <HeadingText align='center'
                            size = {SIZES.xxLarge}                        
                            beforeLettering = "Frequently Asked Question"/>
            
            <FaqList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.background3, 
        flexDirection: 'column', 
        padding: '2.5%'
    }
})

export default FourthSection;