import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
     containerLinear:{                       
        margin: 1,        
        borderRadius: 20,
        backgroundColor: COLORS.background1,
        
    },
    grediant:{     
        borderRadius: 20,
    },
    styledText: {
        fontFamily: 'SatoshiRegular',
        fontSize: SIZES.xxLarge,
        textAlign: 'center',
        color: COLORS.primary,
        marginHorizontal: 5
    }
});

export default styles;
