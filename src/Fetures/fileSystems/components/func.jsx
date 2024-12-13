import RNFS from 'react-native-fs'
import { requestReadPermission } from '../permissions'
export const getAllFiles = async(data) =>{
    requestReadPermission()
    const lst=[]
    const recur=(i)=>{
    try{
        console.log(i.isDirectory())
        if(i.isFile()){
           lst.push(i.path)
        }
        else if(i.isDirectory()){
            console.log('vhj')
            recur(RNFS.readDir(i.path))
        };
    }
    catch(e){console.log(e)}

   

    recur(data);
  }
  return lst
  }