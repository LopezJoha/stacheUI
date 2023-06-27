import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; 
import { COLORS, SIZES } from '../../../constants';


const CardFaq =(props)=>{
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={props.src} style={styles.image}/>
            </View> 
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>

            <View style={styles.containerButton}>
                {props.button}
            </View>           
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.cardBackground,
        flex:1,
        borderWidth:2, 
        borderColor: COLORS.buttonBorder, 
        borderRadius: 15, 
        flexDirection:'column', 
        gap:10, 
        alignContent:'space-between', 
        justifyContent:'center', 
        height:450, 
        padding:'2.5%'
    }, 
    imageContainer:{
        width:'100%', 
        height: '20%', 
        alignItems:"center",
        justifyContent: 'center', 
        padding:'20%'
    },
    image:{
        height:75, 
        width:75
    },
    textContainer:{

    },
    title:{
        fontSize: SIZES.large, 
        color: COLORS.primary, 
        textAlign:'center'
    },
    subtitle:{
        fontSize: SIZES.xxxMedium, 
        color: COLORS.lightWhite
    },
    containerButton:{
        
       
    }
})

export default CardFaq;