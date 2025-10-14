import { StyleSheet, Text, View,TouchableOpacity,TextInput,ImageBackground } from 'react-native'
import {useState} from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Toast } from 'toastify-react-native'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../components/whatsappUtils.js'
import { MMKV} from 'react-native-mmkv'

const storage = new MMKV();

const Login = ( { navigation, setAccessToken}) => {
    const [data,setData]=useState({
        phone:'',
        password:'',
      
    });
    const [passwordShow,setPasswordShow]=useState(false);
    async function Login(){
       try {
             const formData=new FormData()
            formData.append('phone',data.phone) 
            formData.append('password',data.password)
          const res=await api.post('/login',formData,
            {headers:{'Content-Type':'multipart/form-data'}}
          )
        if(res?.data?.message==="login successfully"){
            Toast.success("login successfully",'bottom')
            storage.set('accessToken', res?.data?.accessToken);
            storage.set('refreshToken', res?.data?.refreshToken);
            storage.set('myuserid', res?.data?.user._id);
            setAccessToken(res?.data?.accessToken)
            setTimeout(()=>{navigation.replace('allList')},4000); 
        }
       } catch (error) {
        if(error){
               console.log("Error Message:", error);
                Toast.error(error.response?.data?.message||'something went wronge try again','bottom')
                storage.delete('accessToken');
                storage.delete('refreshToken');
        }
       }
    }
  return (
    <ImageBackground source={{uri:'https://www.techtt.site/html/getFile/Assets/bg/bg7.jpg'}} resizeMode='stretch' style={styles.container}>
    
      <View style={styles.innerContainer}>
            <View style={[styles.inputWrapper,{borderWidth:0,height:'auto',alignSelf:'flex-end',top:0,right:-10,gap:0,backgroundColor:'rgba(0,0,0,0)'}]}>
              <Text style={styles.h1}>Login</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name='phone' size={25} color='#999' />
              <TextInput inputMode='tel' placeholder='enter phone number' style={styles.input} value onChangeText={(text)=>{setData({...data,phone:text})}}/>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name='lock' size={25} color='#999' />
              <TextInput secureTextEntry={!passwordShow}  placeholder='enter password' style={styles.input} value 
              onChangeText={(text)=>{setData({...data,password:text})}}/>
              <Icon name={passwordShow?'eye':'eye-slash'} size={25} color='#999' onPress={()=>setPasswordShow(!passwordShow)} />
            </View>
      </View>
       
              <TouchableOpacity onPress={()=>{navigation.navigate('ragister')}} style={[styles.submit,
                {width:'70%',backgroundColor:'#ccc',alignSelf:'flex-end',right:20,marginTop:10}]} activeOpacity={.4}>
                  <Text style={{fontSize:15,color:'#000'}}>You Don't have account?:</Text>
                  <Text style={{fontSize:20,color:'#6104f7', fontWeight: "700",}}>
                  Ragister
                  </Text>
              </TouchableOpacity>

                 <TouchableOpacity onPress={Login} style={styles.submit} activeOpacity={.4}>
                  <Text style={{fontSize:25,color:'#fff',fontWaight:'bold'}}>
                  Login
                  </Text>
              </TouchableOpacity>   
             
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom:10,
    paddingBottom:5,
    borderBottomColor:'#05fa3a',
    color: "#000",
    flex:1,
    borderBottomWidth:2,

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a6dfe9e",
  },
  innerContainer: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, .5)",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
  },
  loginWrapper:{
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'#dfdede',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:5,
    alignSelf:'flex-end',
    right:20,
    borderWidth:1,
    borderColor:'#999'
  },
  submit:{
    width:'90%',
    marginTop:20,
    borderWidth:1,
    padding:5,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#4040db'
  }
});