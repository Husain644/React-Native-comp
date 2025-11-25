import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


const CustomMarker = ({latLong,text,icon}) => {
  return (
<Marker
  coordinate={latLong}
  anchor={{ x: 0.5, y: 1 }} // bottom center
  zIndex={99}
>
  <View
    style={{
      alignItems: "center",
      marginBottom:25,

    }}
  >
    {/* Bubble */}
    <View
      style={{
        paddingHorizontal:6,
        paddingVertical: 2,
        backgroundColor: "white",
        borderRadius: 12,
        elevation: 3, // Android shadow
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
     
      <Text style={{ fontSize:12, fontWeight: "600" }}>{text}
          {icon &&<Icon name={icon} size={20}/>}
      </Text>
   
    </View>

    {/* Little pointer triangle */}
    <View
      style={{
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "white",
      }}
    />
  </View>
</Marker>
  )
}
export default CustomMarker


