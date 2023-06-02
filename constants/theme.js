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
  lightWhite: "#FAFAFC",
  
  linearGradient :{
    default: "linear-gradient(direction, #FB9505, #FC0076)",
    right: "linear-gradient(to right, #FB9505, #FC0076)",    
  }
}
  
const FONT = {
  dmRegular: "DMRegular",
  dmMedium: "DMMedium",
  dmBold: "DMBold",
  SatochiRegular: "STRegular"
};
  
const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
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
};

export { COLORS, FONT, SIZES, SHADOWS };
  