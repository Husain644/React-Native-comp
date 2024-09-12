import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';


const PaperHome = () => {

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'tomato',
          secondary: 'yellow',
        },
        textSize:{
            small:20,
            mediam:35
        }
      };

  return (
    <PaperProvider theme={theme}>
      <Text style={{ backgroundColor: theme.colors.error,
        color:theme.colors.secondary,fontSize:theme.textSize.mediam }}>PaperHome</Text>
    </PaperProvider>
  )
}

export default PaperHome;

const styles = StyleSheet.create({})