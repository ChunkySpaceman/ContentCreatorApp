// Column.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CustomColumn = ({ style, children, fraction = 1 }) => {
  return (
    <View style={[style, styles.column, { flex: screenWidth / 12 * fraction }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    margin: 5,
    //padding: 10,
    borderRadius: 5,
  },
});

export const Col1 = (props) => <CustomColumn {...props} fraction={1} />;
export const Col2 = (props) => <CustomColumn {...props} fraction={2} />;
export const Col3 = (props) => <CustomColumn {...props} fraction={3} />;
export const Col4 = (props) => <CustomColumn {...props} fraction={4} />;
export const Col5 = (props) => <CustomColumn {...props} fraction={5} />;
export const Col6 = (props) => <CustomColumn {...props} fraction={6} />;
export const Col7 = (props) => <CustomColumn {...props} fraction={7} />;
export const Col8 = (props) => <CustomColumn {...props} fraction={8} />;
export const Col9 = (props) => <CustomColumn {...props} fraction={9} />;
export const Col10 = (props) => <CustomColumn {...props} fraction={10} />;
export const Col11 = (props) => <CustomColumn {...props} fraction={11} />;
export const Col12 = (props) => <CustomColumn {...props} fraction={12} />;