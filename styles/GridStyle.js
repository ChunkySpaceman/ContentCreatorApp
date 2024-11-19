import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const GridStyle = {
  fixedBottom:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap'    
  },
  col12:{
    width: screenWidth
  },
  col11:{
    width: screenWidth/(11/12)
  },
  col10:{
    width: screenWidth/(10/12)
  },
  col9:{
    width: screenWidth/(9/12)
  },
  col8:{
    width: screenWidth/(8/12)
  },
  col7:{
    width: screenWidth/(7/12)
  },
  col6:{
    width: screenWidth/(6/12)
  },
  col5:{
    width: screenWidth/(5/12)
  },
  col4:{
    width: screenWidth/(4/12)
  },
  col3:{
    width: screenWidth/(3/12)
  },
  col2:{
    width: screenWidth/(2/12)
  },
  col1:{
    width: screenWidth/(1/12)
  },
  
};

export default GridStyle;
