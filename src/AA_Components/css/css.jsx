import { StyleSheet } from "react-native";
const css = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#ccc',
        backgroundColor: "red",
        position: "relative",
        minWidth:'100%',
        zIndex:0
    },
    inputWrapper:{
        backgroundColor:'#f2f7f1',
        padding:20,
        borderRadius:10,
        zIndex:10,
        
    },
    input:{
        width:300,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginVertical:6,
        fontSize:16, 
        backgroundColor:'#fff',  
    },
    label:{
        display:'',
        marginBottom:-8,
        marginLeft:6,
        zIndex:10,
        fontSize:12,
        color:'#000'
    },

    submitBtn:{
        marginTop:20,
    },
    submitBtnTxt:{
        backgroundColor:'blue',
        color:'#fff',
        fontWeight:'bold',
        padding:10,
        fontSize:16,
        borderRadius:10,
        textAlign:'center'
    },
    bgRed:{
        backgroundColor:'red'
    },
    bgBlue:{
        backgroundColor:'blue'
    }
})

export default css;