import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import auto from './../assets/images/auto.jpg'
import car from './../assets/images/car2.jpg'
import parcel from './../assets/images/parcel.jpg'
import bike from './../assets/images/bike.jpg'
import rapido from './../assets/images/rapido.jpg'
import web from './../assets/images/web.jpg'
import css from '../AA_Components/css/css';

export const Img={
    car:car,
    auto:auto,
    parcel:parcel,
    bike:bike,
    rapido:rapido,
    web:web
}
export const cs= css ;

export const FontIcon=({name='star',size=20,color="#999"})=> {return (<><Icon1 name={name} size={size} color={color}/></>)}  //font Awesome
export const MuiIcon=({name='star',size=20,color="#999"})=> {return (<><Icon2 name={name} size={size} color={color}/></>)}   //material community icon
export const IoIcon=({name='star',size=20,color="#999"})=> {return (<><Icon3 name={name} size={size} color={color}/></>)}   //Ionicons icon
export const MaterialIcon=({name='star',size=20,color="#999"})=> {return (<><Icon4 name={name} size={size} color={color}/></>)}   //MaterialIcons