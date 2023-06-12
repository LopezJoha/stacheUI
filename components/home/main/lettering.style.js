import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
     containerLinear:{
        flex: 1.0,               
        margin: 1,        
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background1,
        cursor: 'text'
       
    },
    grediant: {  
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    styledText: {
        fontSize: SIZES.xxLarge,
        textAlign: 'center',
        color: COLORS.primary,    
        paddingHorizontal:5,         
    }
});

export default styles;
