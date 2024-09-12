// hpow to use env variables for the environment variable 
// first install doteenv module

//npm i react-native-dotenv

// create a.env file in the root of your project
//add environment variables with name and value  like this 

//API_KEY=your_api_key

//in your babel.config.js file add to this line 
// plugins: [
//     [ 'react-native-reanimated/plugin'],
//     ---------------------------------------
//     [
//       "module:react-native-dotenv",
//       {
//         moduleName: "react-native-dotenv",
//       },
//     ],
//    ---------------------------------------
//   ]

// run this command and reset cache 
//and run 
// npx react-native start  --reset-cache

//and use variables like this where you use

//import { API_KEY } from'react-native-dotenv';







