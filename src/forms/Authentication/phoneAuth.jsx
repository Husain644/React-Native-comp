import { StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import React,{useState,useRef} from "react";
import { getAuth, PhoneAuthProvider, signInWithPhoneNumber } from "@react-native-firebase/auth";


const PhoneAuth = () => {
  
    const auth = getAuth();
    const [phoneSubmit,setPhoneSubmit]=useState(true);
    const [phone,setPhone]=useState('')
    const [otp,setOtp]=useState({val1:'',val2:'',val3:'',val4:''});
    const focusRef1=useRef(null);
    const focusRef2=useRef(null);
    const focusRef3=useRef(null);
    const focusRef4=useRef(null);
    
   if(otp.val1.length>0){focusRef2.current.focus()}
   if(otp.val2.length>0){focusRef3.current.focus()}
   if(otp.val3.length>0){focusRef4.current.focus()}
   if(otp.val4.length>0){alert(`okk otp is ${otp.val1+otp.val2+otp.val3+otp.val4}`)}

async  function sendOtp(){
try {
    const confirmation = await signInWithPhoneNumber(auth,'+916396625635')
   console.log(confirmation)
} catch (error) {
  console.log(error)
}
  }

  return (
<>
 {phoneSubmit?<View style={styles.container}>
    <Text style={styles.title}>Welcome our application</Text>
    <Text style={styles.title2}>Enter Your Phone Number</Text>
    <TextInput inputMode="numeric" placeholder="Enter Your Phone Number" placeholderTextColor='#ccc' style={styles.input} 
    value={phone} onChangeText={(t)=>setPhone(t)}
    />
    <TouchableOpacity onPress={()=>{sendOtp()}} style={styles.submit}><Text style={styles.submitText}>
        Submit
      </Text></TouchableOpacity>
  </View>:
  <View style={styles.container}>
          <Text style={styles.title}>Welcome our application</Text>
          <Text style={styles.title2}>Enter Otp</Text>
          <View style={styles.otpContainer}>
             <TextInput onChangeText={(t)=>{setOtp({...otp,val1:t})}} autoFocus={true} ref={focusRef1} value={otp.val1} placeholder="" inputMode="numeric" focus={true} style={styles.inputOtp}/>
             <TextInput onChangeText={(t)=>{setOtp({...otp,val2:t})}} ref={focusRef2} value={otp.val2} placeholder="" inputMode="numeric" style={styles.inputOtp}/>
             <TextInput onChangeText={(t)=>{setOtp({...otp,val3:t})}} ref={focusRef3} value={otp.val3} placeholder="" inputMode="numeric" style={styles.inputOtp}/>
             <TextInput onChangeText={(t)=>{setOtp({...otp,val4:t})}} ref={focusRef4} value={otp.val4} placeholder="" inputMode="numeric" style={styles.inputOtp}/>
          </View>
  </View>
  }
</>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eaea',
  },
  title:{
    fontSize:30,
    color:'#f37c0e',
    backgroundColor:'#fff',
    textAlign:'center',
    fontWeight:'600',
    marginTop:10
  },
  title2:{
    fontSize:20,
    color:'#000',
    textAlign:'center',
    marginTop:50,
    fontStyle:'italic'
  },
  input:{
  backgroundColor:'#fff',
  width:'90%',
  marginVertical:20,
  alignSelf:'center',
  borderRadius:10,
  fontSize:26,
  fontWeight:'600',
  paddingHorizontal:10,
  letterSpacing: 2,
  borderWidth:1
  },
  submit:{
    width:'85%',
    backgroundColor:'blue',
    alignSelf:'center',
    borderRadius:20,
    padding:5,
    marginTop:30
  },
  submitText:{
    color:'#fff',
    fontSize:30,
    textAlign:'center',
    fontWeight:'600'
  },
  otpContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20
  },
  inputOtp:{
    width:50,
    height:40,
    backgroundColor:'#fff',
    borderRadius:5,
    textAlign:'center',
    fontWeight:'600',
    color:'#000'
  }
});
