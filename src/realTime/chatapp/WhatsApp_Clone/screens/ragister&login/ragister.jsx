import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,ImageBackground } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome'
import user from '../../assets/user2.png'
import { pickImage } from '../../components/whatsappUtils.js'
import { Toast } from 'toastify-react-native'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../components/whatsappUtils.js'

const Ragister = () => {
    const navigation=useNavigation();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({
        name:'',
        phone:'',
        password:'',
        profile:null
    });
    const [passwordShow,setPasswordShow]=useState(false);
    const Ragister=async()=>{
        try {
            const formData=new FormData()
            formData.append('name',data.name)
            formData.append('phone',data.phone) 
            formData.append('password',data.password)
            if (data?.profile) {
            formData.append('dp', {
              uri: data.profile,
              type: 'image/jpeg',
              name: 'dp.jpg',
            });
          }
          const res=await api.post('/ragister',formData,
            {headers:{'Content-Type':'multipart/form-data'}}
          )
            Toast.success("Ragistration successfully ",'bottom')
            setTimeout(()=>{navigation.replace('login')},4000); 
        } catch (error) {
            if(error){
                console.log(error)
                console.log("Error Message:", error.response?.data.message);
                Toast.error(error.response?.data?.message||'something went wronge try again','bottom')
            }
        }
    }
    
  return (
    <ImageBackground source={{uri:'https://www.techtt.site/html/getFile/Assets/bg/bg7.jpg'}} resizeMode='stretch' style={styles.container}>
    
      <View style={styles.innerContainer}>
            <View style={[styles.inputWrapper,{borderWidth:0,height:'auto',alignSelf:'flex-end',top:0,right:-10,gap:0,backgroundColor:'rgba(0,0,0,0)'}]}>
              <Text style={styles.h1}>Ragister</Text>
                <TouchableOpacity onPress={async()=>{const res=await pickImage();
                  setData({...data,profile:res.uri})
                }} style={{alignItems:'center'}} activeOpacity={.4}>
                    <Image style={{width:80,height:80,borderRadius:40,borderWidth:1,borderColor:'#999'}} resizeMode='cover' source={data.profile?{uri:data.profile}:user} />
                    <Text style={{fontSize:16,color:'blue',padding:0,textAline:'center',fontWaight:'bold'}}>
                    choose profile picture
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name='user' size={25} color='#999' />
              <TextInput placeholder='enter name' style={styles.input}  onChangeText={(text)=>{setData({...data,name:text})}}/>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name='phone' size={25} color='#999' />
              <TextInput inputMode='tel' placeholder='enter phone number' style={styles.input} value onChangeText={(text)=>{setData({...data,phone:text})}}/>
            </View>
            <View style={styles.inputWrapper}>
              <Icon name='lock' size={25} color='#999' />
              <TextInput secureTextEntry={!passwordShow}  placeholder='enter password' style={styles.input} value onChangeText={(text)=>{setData({...data,password:text})}}/>
              <Icon name={passwordShow?'eye':'eye-slash'} size={25} color='#999' onPress={()=>setPasswordShow(!passwordShow)} />
            </View>
      </View>
       
              <TouchableOpacity onPress={()=>{navigation.navigate('login')}} style={[styles.submit,
                {width:'70%',backgroundColor:'#ccc',alignSelf:'flex-end',right:20,marginTop:10}]} activeOpacity={.4}>
                  <Text style={{fontSize:16,color:'#000'}}>Already Ragister?:</Text>
                  <Text style={{fontSize:20,color:'#6104f7', fontWeight: "700",}}>
                  Login
                  </Text>
              </TouchableOpacity>
                 <TouchableOpacity onPress={Ragister} style={styles.submit} activeOpacity={.4}>
                  <Text style={{fontSize:25,color:'#fff',fontWaight:'bold'}}>
                  Ragister
                  </Text>
              </TouchableOpacity>

       
    </ImageBackground>
  )
}

export default Ragister

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