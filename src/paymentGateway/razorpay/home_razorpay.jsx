import {React,useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import {RazorPay_key_Id,RazorPay_key_Secret} from "react-native-dotenv"
import RazorpayCheckout from 'react-native-razorpay';

const RazorPayHome=()=>{
    // console.log(RazorPay_key_Id,RazorPay_key_Secret)
    const options= {
        description: 'Credits towards consultation',
        image: '',
        currency: 'INR',
        key: 'rzp_test_DVcvXxb8vXLEw2',
        amount: '5000',
        name: 'Sonu',
        order_id: '',
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: 'Gaurav Kumar'
        }}
    const pay=()=>{
        RazorpayCheckout.open(options).then((data) => {
         //redirect back to seccess page or home page as you demmand
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure and you can redirect failure page
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }

    return(
        <View style={{flex:1}}>
           <Text style={{width:'100%',textAlign:'center',padding:10,fontSize:25,backgroundColor:'lightgreen'}}>Razorpay Home Screen</Text>
                 <Image style={{width:'100%',height:'50%',marginTop:100}}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-g0CIPXjMRjysUDzHqNyu0IFW0x5vWoaUA&s'}}/>
                <TouchableOpacity  onPress={pay} style={{width:'100%',alignItems:'center',marginTop:-100,backgroundColor:'blue',padding:10}}>
                    <Text style={{fontSize:25,color:'#fff',padding:6,backgroundColor:'red',borderRadius:10}}>Pay Nowww</Text>
                </TouchableOpacity>         
        </View>
    )
}

export default RazorPayHome;

const styles=StyleSheet.create({

})