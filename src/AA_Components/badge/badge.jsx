import * as React from 'react';
import { Badge } from 'react-native-paper';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BadgeComp = () => (
    <View style={{width:'90%',alignSelf:'center',padding:20,borderWidth:1,marginTop:20}}>
    <Badge>3</Badge>
    <MyBadge txt={'50+'} />
    
  
    </View>
  
);

export default BadgeComp;

const MyBadge = ({txt=0})=>{
    return (
        <>
        <View   style={{position:'relative',width:30,height:30,backgroundColor:'#fff',borderRadius:20,alignItems:'center',justifyContent:'center'
        }}>
               <Text style={{position:'absolute',top:-6,right:-4,backgroundColor:'red',height:20,width:20,zIndex:99,
               borderWidth:1,borderColor:'#fff',
               borderRadius:10,textAlign:'center',verticalAlign:'middle',fontWeight:'bold',color:'#fff',fontSize:10
               }}>{txt}</Text>
                <Icon name='bell' size={20} color='#000' />
          
        </View>
        </>
    )
}