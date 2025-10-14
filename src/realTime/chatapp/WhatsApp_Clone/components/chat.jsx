import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput,ScrollView,ImageBackground,KeyboardAvoidingView} from 'react-native';
import React,{useState,useRef,useEffect,useMemo} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getUserChat,setUserChat,formatChatTime } from './whatsappUtils';

const Chat = ({ route,navigation,socket }) => {
    const {name,_id,phone,dp} = route?.params
  const Chats=getUserChat(_id);
  const scrollViewRef = useRef();
  const [text,setText]=useState('')
  const [chat,setChat]=useState(Chats)
useEffect(() => {
  if (!socket) return;
  const handleMessage = (data) => {
    console.log("message received", data);
    setChat(prev => [...prev, { sender: false, text: data.text,time:data.time }]);
   
  };
  socket.on("message", handleMessage);
  return () => {
    socket.off("message", handleMessage);
  };
}, [socket]);
  
useEffect(() => {
  scrollViewRef.current?.scrollToEnd({ animated: true });
}, [chat]);

function sendMessage(){ 
                  if (text.trim() === '') return;
                  const data={conversationId:"68e66b316f3ae4b2aab253f3",
                              reciverId:_id,
                              text:text.trim(),
                              time:new Date().toISOString()
                            }
                  socket.emit("message",data);
                  setChat(prev=>[...prev,{sender:true,text:data.text,time:data.time}]);
                 setText('')
                 
                }
useEffect(() => {
   setUserChat(_id,chat)
}, [chat]);

  return (
  <KeyboardAvoidingView style={{flex:1}}>
                    <ImageBackground resizeMode='stretch' source={{uri:'https://www.techtt.site/html/getFile/Assets/bg/whatsappbg.jpg'}} 
    style={styles.container}>
      <View style={styles.header}>
       <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <Icon name="long-arrow-left" size={30} color="#999" />
          </TouchableOpacity>
         <Image style={styles.dp} source={{ uri:`http://192.168.30.197:8000/whatsapp/static/${dp}`}} />
           <View style={{}}>
          <Text style={{ fontSize: 20, color: '#000' }}>{name}</Text>
          <Text style={{ fontSize: 14, color: '#000' }}>last Seen 04:45 am</Text>
        </View>
       </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="video-camera" size={22} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="phone" size={22} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="ellipsis-v" size={22} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{minWidth:'100%',padding:10}}  ref={scrollViewRef}> 
           {
            chat?.map((item,index)=>{ return(
             <View  key={index} style={[styles.senderChatWrapper,item.sender?{alignSelf:'flex-end',backgroundColor:'rgb(139, 238, 139)'}:
             {alignSelf:'flex-start',backgroundColor:'#dfe5eb'} ]}>
                <Text style={{fontSize:18,color:'#000'}}>{ item.text}</Text>
                <Text style={{bottom:-10,fontSize:10}}>{formatChatTime(item?.time)}</Text>
             </View>
        
        )})
           }

      </ScrollView>
      <View style={styles.input_Icon_wrapper}>
            <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder='enter text'   multiline  value={text}
                 onChangeText={(text)=>{setText(text)}}
                 />
           </View>
             <TouchableOpacity 
        
             onPress={sendMessage}
             style={styles.sendBtn}>
                <Icon name="send" color="#64e764" size={35} style={{transform:[{rotate:text!==''?'50deg':'0deg'}],right:2}}/>
            </TouchableOpacity>
      </View>
    </ImageBackground>
  </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#888580',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input_Icon_wrapper:{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',paddingHorizontal:10,paddingBottom:5,
    backgroundColor:'#fff'
  },
  inputWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:20,
    paddingHorizontal:5,
  },
  input:{
     flex: 1,
    maxHeight: 100, // prevents growing too big when multiline
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 8,
    fontSize: 16,
    backgroundColor: "#f2f2f2",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:5,
    borderBottomWidth: 1,
    borderColor: '#c4c2c2',
    paddingHorizontal: 10,
    backgroundColor:'#fff',
    width:'100%'
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#999',
  },
  iconWrapper: {
    flexDirection: 'row',
    gap:25,
    paddingRight:15
  },
  senderChatWrapper:{
    flexDirection:'row',alignItems:'flex-end',borderWidth:1,borderColor:'#999',maxWidth: "70%",
    alignSelf:'flex-end',
    marginTop:10,padding:8,borderRadius:10},
    sendBtn:{width:50,height:50,backgroundColor:'#fff',borderRadius:25,marginLeft:5,alignItems:'center',
      justifyContent:'center'}
});
