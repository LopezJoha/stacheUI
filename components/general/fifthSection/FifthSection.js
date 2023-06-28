import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';
import HeadingText from '../../home/main/HeadingText';
import StyledButton from '../StyledButton';


const FifthSection =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <HeadingText align='center'
                            size = {SIZES.xxLarge}                        
                            beforeLettering = "Join our awesome community!"/>
            </View>
            <View style={styles.imageContainer}>
                <StyledButton image={<Image source={require('../../../assets/images/discord.png')}
                                        style={styles.image}></Image>} 
                                        buttonText='Join Discord'
                                        alignS='center'
                                        padding={5}
                                        />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.background3, 
        flexDirection: 'column', 
        padding: '2.5%'
    },
    textContainer:{
        paddingVertical:'5%'
    }, 
    imageContainer:{
        
        justifyContent:'center', 
        alignContent:'center', 
        borderEndWidth:2, 
        borderColor:'red'
    }, 
    image:{
        alignSelf:'center'
    }
})

export default FifthSection;