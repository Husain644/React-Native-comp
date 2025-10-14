import {DefaultTheme} from "@react-navigation/native";

const DefaultTheme={
    ...DefaultTheme,
//    add your custom themes property
   colors:{
    ...DefaultTheme.colors,
        primary: "#4F46E5",   // Indigo
        secondary: "#06B6D4", // Cyan
        background: "#FFFFFF",
        card: "#F3F4F6",
        text: "#111827",
        border: "#E5E7EB",
        muted: "#6B7280",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
   }
}

export default MyTheme;
// pass to naigation container
//  <NavigationContainer theme={MyTheme}>
//       <MyStack />
//  </NavigationContainer> 

// use themes color in component 
// import {useTheme} from '@react-navigation/native'
// const {colors}=useTheme()
