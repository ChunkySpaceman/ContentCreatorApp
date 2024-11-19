import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavButtons = ({ navigateToInstructions, navigateToAmsler, navigateToSettings }) => {
  return (
    <View style={styles.buttonContainer}>	
      <Button title="Instructions" onPress={navigateToInstructions} />
      <Button title="Grid" onPress={navigateToAmsler} />
	  <Button title="Settings" onPress={navigateToSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default NavButtons;