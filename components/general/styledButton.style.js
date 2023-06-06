import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {   
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.background1,
    borderColor: COLORS.primary,
    padding: '0.5%',
    borderWidth: 1,
    borderStyle :'solid',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,    
  }),
  btnText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    paddingHorizontal: '0.5%',
  }
});

export default styles;