const COLORS = {
  text1: "#EF9C12",
  text2: "#FFFFFF",
  text3 : "#B8B8B8",

  primary: "#FB9505",
  secondary: "#FC0076",
  
  
  gray: "#C1C0C8",
  background1: "#212121",
  background2: "#1E1E1E",
  background3: '#282828',
  darkBackground : "#1B1B1B",
  cardBackground : "#1B1A1A",
  buttonBackground: '#121212bf',
  buttonBorder: '#666666',
  buttonText: '#8e8e8e',
  footer:'#1c1c1c',

  white: "#FFFFFF",
  lightWhite: "#FAFAFC"  
}
  
const FONT = {  
  SatochiRegular: "Satoshi-Regular",
};
  
const SIZES = {
  xSmall: 10,
  small: 12,
  xMedium:14,
  xxMedium: 16,
  xxxMedium :18,
  medium: 22,  
  interMed:24,
  middle:27,
  large: 30,
  xLarge: 32,
  xxLarge: 50,
  xxxLarge: 54 
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
  