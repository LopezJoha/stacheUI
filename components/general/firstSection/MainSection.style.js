import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({  
  container: {
    width: "100%",
    height: "85%",
    paddingTop: "10%",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',   
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
  image: {
    flex: 1,
    justifyContent: 'center',
  }, 
  
  box: {
    width: "50%",
    height: "50%",
    padding: 5
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  adicional: {
    borderWidth: 2,
    borderColor : COLORS.primary, 
  }
  
});

export default styles;