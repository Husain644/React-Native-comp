import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon  from "react-native-vector-icons/FontAwesome";
import { setHindi, setEnglish } from "../../redux/slices/slices";

export const LanguageBtn = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    if (currentLanguage === "hi") {
      dispatch(setEnglish());
    } else {
      dispatch(setHindi());
    }
  };
  return (
    <TouchableOpacity onPress={toggleLanguage} style={styles.container}>
      <Text style={{ fontSize: 16,color:'#000' }}>
        {currentLanguage === "hi" ? "⚙️/English" : "⚙️/हिन्दी"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    minWidth: 100,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});
export const HeaderOptions = ({title=''}) => {
  return {
    headerTitle: () => <Text style={{fontSize: 18, fontWeight: "bold",color:'#000',
      textTransform: "capitalize"
     }}>{title}</Text>,
    headerRight: () => <LanguageBtn />,
  };
}
///
export const Language= () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  return currentLanguage;
}
export const stackOptions=(navigation,{title=''})=>{
      return {
    headerTitle: () => <Text style={{fontSize: 18, fontWeight: "bold",color:'#000',
      textTransform: "capitalize"
     }}>{title}</Text>,
    headerRight: () => <LanguageBtn />,
    headerLeft:()=> <TouchableOpacity onPress={() => navigation.openDrawer()} style={{paddingVertical:5, paddingHorizontal:10
    }}><Icon name="bars" size={25} color="#000"/></TouchableOpacity>
  }    
}
export const stackOptionsWithBack=({title=''})=>{
      return {
    headerTitle: () =><Text style={{fontSize: 18, fontWeight: "bold",color:'#000',
      textTransform: "capitalize"
     }}>{title}</Text>,
    headerRight: () => <LanguageBtn />,
  }    
}

