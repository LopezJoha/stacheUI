import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {   
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: COLORS.background1,
    
    },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,    
  }),
  btnText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    paddingHorizontal: '0.5%',
  },
  
});

export default styles;