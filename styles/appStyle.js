import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

import Padding from '../styles/Padding';
import Margin from '../styles/Margin';
import Typography from '../styles/Typography';
import Color from '../styles/Color';
import Border from '../styles/Border';
import Button from '../styles/Button';
import Sizing from '../styles/Sizing';
import Grid from '../styles/GridStyle';


const screenHeight = Dimensions.get('window').height;
const labelFontSizePercentage = 1.5; // Adjust this percentage as needed
const labelFontSize = (screenHeight * labelFontSizePercentage) / 100;

const iconSizePercentage = 3; // Adjust this percentage as needed
const iconSize = (screenHeight * iconSizePercentage) / 100;

const appStyle = StyleSheet.create({
  ...Padding,
  ...Margin,
  ...Typography,
  ...Color,
  ...Border,
  ...Button,
  ...Sizing,
  ...Grid,
  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  centeredContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appView: {
    flex: 9, // Takes 90% of the available vertical space.
    //backgroundColor: 'lightblue', // Just for visualization.
    //justifyContent: 'center', // To center content vertically.
    //alignItems: 'center', // To center content horizontally.
  },
  buttonBar: {
    flex: 1, // Takes 10% of the available vertical space.
    backgroundColor: 'gray', // Just for visualization.
    justifyContent: 'center', // To center content vertically.
    alignItems: 'center', // To center content horizontally.
  },
  Text:{
    color:"black",
    fontSize:14,
  },
    imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    //width: '60%', // Adjust as needed
    height: '80%', // Adjust as needed
    resizeMode: 'contain', // Maintain aspect ratio
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width:'100%'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  step: {
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    color: 'black'
  },
  tabBar:{
    height: '10%'
  },
  tabLabel:{
    fontSize: labelFontSize,
  },
  tabIcon:{
    height: iconSize,
  },
  switchContainer: {
    width: 80, // Adjust the width to make it larger
    height: 40, // Adjust the height to create the oval shape
  },
  toggleSwitch: {
    transform: [{ scaleX: 2 }, {scaleY: 2 }], // Scale the switch to make it circular
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'    
  }

});

export default appStyle;
