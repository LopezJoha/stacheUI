import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: COLORS.background1,
    borderColor: COLORS.primary,
    padding: '0.5%',
    paddingVertical: '1.0%',
    borderWidth: 1,
    borderStyle :'solid',
    borderRadius: 12,
    alignItems: "center",
    minWidth: 140,
    maxWidth: 170,
    minHeight: 48
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