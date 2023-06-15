const COLORS = {
  text1: "#EF9C12",
  text2: "#FFFFFF",
  text3 : "#B8B8B8",

  primary: "#FB9505",
  secondary: "#FC0076",
  
  
  gray: "#C1C0C8",
  background1: "#212121",
  background2: "#1E1E1E",
  darkBackground : "#1B1B1B",
  cardBackground : "#1B1A1A",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC"  
}
  
const FONT = {  
  SatochiRegular: "Satoshi-Regular",
};
  
const SIZES = {
  xSmall: 10,
  small: 12,
  xxMedium:14,
  xMedium: 16,
  medium :18,
  large: 30,
  xLarge: 32,
  xxLarge: 56,
 
};
  
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  smallPrimary: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
  