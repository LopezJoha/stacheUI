import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {  
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: COLORS.buttonBackground,
    borderColor: COLORS.primary,
    padding: '0.5%',
    paddingVertical: '1%',
    borderWidth: 1,
    borderStyle :'solid',
    borderRadius: 15,
    alignItems: "center",
    minWidth: 140,
    maxWidth: 170,
    minHeight: 45
    },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,    
  }),
  btnText: {
    color: COLORS.primary,
    fontSize: SIZES.xxMedium,
    paddingHorizontal: '0.5%',
  },
  
});

export default styles;