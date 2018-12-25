//import library for making a component
import React from 'react';
import { Text, View } from 'react-native'; // The view tag allows us to position and wrap elements

// Make a component
const Header = () => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style = {viewStyle}>
      <Text style = {textStyle}> Albums!</Text>
    </View>
  );

};

const styles = {
  viewStyle: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      elavation: 2,
      position: relative
  },

  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
