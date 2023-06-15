import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  textContainer: {   
    flex:1    
    },
  
  text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    lineHeight: 30
  },
  
});

export default styles;