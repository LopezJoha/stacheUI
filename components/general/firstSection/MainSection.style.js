import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({  
  container: {    
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: 'row',
    flexWrap: 'wrap',   
    backgroundColor: COLORS.background1,
    paddingTop:'3%', 
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }, 
  
  box: {
    width: "50%",
    height: "50%", 
      
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }, 
  adicional: {
    borderWidth: 2,
    borderColor : COLORS.primary, 
  },
  calltheAction:{
    width:'100%',
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    gap:5
    
  },
  input:{
    width: '65%',  
    height: 45,
    backgroundColor: COLORS.buttonBackground,
    opacity:1,
    borderWidth: 0.5,
    borderColor: COLORS.buttonBorder,
    borderRadius: 15,
    paddingLeft: '5%',    
  }, 
  faqContainer:{   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',       
  },
  containerFAQ: {    
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, 
    borderColor: 'transparent', 
    paddingTop:50
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 0.5, 
    borderColor: COLORS.buttonBorder, 
    backgroundColor: COLORS.background1, 
    borderRadius:25
  },
  button: {
    width: 130,
    height: 55,    
    backgroundColor: COLORS.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:25,     
  },
  textFAQ:{
    color: COLORS.buttonText,
    fontFamily: 'SatoshiRegular',
    fontSize: SIZES.xMedium, 
    fontWeight: '600'
  }  
});

export default styles;