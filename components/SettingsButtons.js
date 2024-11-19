import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SettingsButtons = ({ navigateToAmsler, navigateToInstructions }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="View Grid" onPress={navigateToAmsler} />
      <Button title="Instructions" onPress={navigateToInstructions} />
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

export default SettingsButtons;