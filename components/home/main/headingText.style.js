import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    container: {
        width: "100%",        
    },
    title: {
        fontFamily: 'SatoshiRegular',
        fontSize: SIZES.xxxLarge,
        color: COLORS.text2,      
        
    }, 
    subtitle: {
        fontFamily: 'SatoshiRegular',
        fontSize: SIZES.medium,
        color: COLORS.background1,
    } 
});

export default styles;
