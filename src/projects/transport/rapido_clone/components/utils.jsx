import { useNavigation } from "@react-navigation/native";

const navigation=useNavigation()

export const Navigate=(name)=>{
    navigation.navigate(name)
}