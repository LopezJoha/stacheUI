import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
     containerLinear:{
        flex: 1.0,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.background1        
       
    },
    grediant: {
               
        justifyContent: 'center',
        alignSelf: 'center', 
        borderRadius: 8
    },
    buttonContainer:{
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background1, 
        width :'97%',
        marginTop: '2%', 
        marginBottom: '2%',
        borderRadius: 8,
        alignItems: 'center',
        
    },
    buttonText: {
        fontSize: SIZES.xxLarge,
        textAlign: 'center',
        color: COLORS.primary,
        marginHorizontal: 3,
        
    }

});

export default styles;
