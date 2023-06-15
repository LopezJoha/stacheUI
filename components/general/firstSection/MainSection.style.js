import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({  
  container: {    
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: 'row',
    flexWrap: 'wrap',   
    backgroundColor: COLORS.background1,
    
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
    justifyContent: 'center'
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
    justifyContent: 'space-between',
    alignItems:'center',
    
  },
  input:{
    width: '75%',  
    height: 50,
    backgroundColor: COLORS.cardBackground,
    opacity:1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: '5%',    
  }, 
  faqContainer:{
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
       
  },
  faqContainerInner:{
    
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'red',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 
  faqButton:{
    width:100, 
    height:60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

  
});

export default styles;