import { StyleSheet } from "react-native";
import { bgColor,Colors } from "./color";

const css = StyleSheet.create({
    //background color
    bg:bgColor,
    // common css
    flex1:{flex:1}, flex2:{flex:2},flex3:{flex:3}, flex4:{flex:4},
    container: {paddingHorizontal: 10,alignItems: 'center'},
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ccc',
        position: "relative",
        minWidth: '100%',
        zIndex: 0
    },
    rowStart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    w100:{width:'100%'},w75:{width:'75%'},w50:{width:'50%'},w25:{width:'25%'},
    inputWrapper: {
        backgroundColor: '#f2f7f1',
        padding: 20,
        borderRadius: 10,
        zIndex: 10,
    },
    input: {
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 6,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    label: {
        display: '',
        marginBottom: -8,
        marginLeft: 6,
        zIndex: 10,
        fontSize: 12,
        color: '#000'
    },

    submitBtn: {
        marginTop: 20,
    },
    submitBtnTxt: {
        backgroundColor: 'blue',
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        textAlign: 'center'
    },

    // text styling start
    h1: {
        fontSize: 75,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize'
    },
    h2: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize'
    },
    h3: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize'
    }
    ,
    h4: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    h5: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    h6: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    h7: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Roboto'
    },
    h7i: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Roboto',
        fontStyle:'italic'
    },
    h8: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto'
    },
    h8i: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto',
        fontStyle:'italic'
    },
    textCenter: {
        textAlign: 'center'
    },
    color:Colors,
    // text styling End
    //  border styling start
    border: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999'
    },
    border0: {
        borderWidth: 1,
        borderColor: '#999'
    },
    borderff:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff'
    },
    // padding and margins
    p5: { padding: 5 },
    p10: { padding: 10 },
    p20: { padding: 20 },
    p50: { padding: 50 },
    ph5: { paddingHorizontal: 5 },
    ph10: { paddingHorizontal: 10 },
    ph20: { paddingHorizontal: 20 },
    ph50: { paddingHorizontal: 50 },
    pv5: { paddingVertical: 5 },
    pv10: { paddingVertical: 10 },
    pv20: { paddingVertical: 20 },
    pv50: { paddingVertical: 50 },
    m5: { margin: 5 },
    m10: { margin: 10 },
    m20: { margin: 20 },
    m50: { margin: 50 },
    mh5: { marginHorizontal: 5 },
    mh10: { marginHorizontal: 10 },
    mh20: { marginHorizontal: 20 },
    mh50: { marginHorizontal: 50 },
    mv5: { marginVertical: 5 },
    mv10: { marginVertical: 10 },
    mv20: { marginVertical: 20 },
    mv50: { marginVertical: 50 },
    //gap
    g5:{gap:5},
    g10:{gap:10},
    // shadow css
    shadow:{
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{height:5,width:5},
        shadowOpacity:0.7,
        shadowRadius:5,
        elevation:10},
    
})
export default css;