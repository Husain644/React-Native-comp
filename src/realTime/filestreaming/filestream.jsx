import React, { useState,useEffect,useRef } from "react";
import { View, Text, Button,Image,ScrollView,TouchableOpacity} from "react-native";
import RNFS from "react-native-fs";
import ensurePermission from "./permissions.js";
import axios from "axios";
import DocumentPicker from 'react-native-document-picker';
import { GetMimeType,getRealPath } from "./utility.jsx";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const SERVER_URL = "https://www.techtt.site/stream"; // change to your local IP

export default function DownloadScreen() {
  //Download Code Start
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [dest,setDest]=useState("");
  const [fileList,setFileList]=useState([]);
  const [fileNm,setFileNm]=useState(
    {
       name:'',
       status:''
    }
  );

  const startDownload = async (filename) => {
    ensurePermission();
   const downloadDest = `${RNFS.DownloadDirectoryPath}/${Date.now()}_${filename}`;
    const fileUrl = `${SERVER_URL}/download/${filename}`;

    setStatus(`Starting download...${filename}`);
    setFileNm({
        name:filename,
        status:'downloading'
    });
    setProgress(0);
    const download = RNFS.downloadFile({
        
      fromUrl: fileUrl,
      toFile: downloadDest,
      progress: (res) => {
        const percent = (res.bytesWritten / res.contentLength) * 100;
        setProgress(()=>Math.round(percent));
      },
      progressDivider: 1,
    });

    try {
      const result = await download.promise;
      if (result.statusCode === 200) {
        setStatus(`Download complete! Saved at: ${downloadDest}`);
         setDest(downloadDest)
             setFileNm({
        name:filename,
        status:'downloded'
    });
         setProgress(100);
      } else {
        setStatus("Download failed");
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
      console.log(`Error: ${err.message}`)
    }
  };
///Download Ccode End

//Upload Code Start


const uploadFileInChunks = async (filePath) => {
  setProgress(0);
  setStatus("Starting upload...");

  try {
    const realPath = await getRealPath(filePath);
    const fileStat = await RNFS.stat(realPath);
    const fileSize = fileStat.size;
    const chunkSize = 5 * 1024 * 1024; // 5 MB
    const totalChunks = Math.ceil(fileSize / chunkSize);
    const fileName = realPath.split("/").pop() || "upload_file";

    console.log(`Uploading ${fileName} in ${totalChunks} chunks...`);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, fileSize);
      // Read chunk
      const base64Data = await RNFS.read(realPath, end - start, start, "base64");
      // Save to temp
      const tempPath = `${RNFS.TemporaryDirectoryPath}/${fileName}_chunk_${i}`;
      // const tempPath = `${RNFS.CachesDirectoryPath}/${fileName}_chunk_${i}`;



      await RNFS.writeFile(tempPath, base64Data, "base64");
      const exists = await RNFS.exists(tempPath);
      console.log(exists,tempPath)
        if (!exists) {
            console.log(fileName,'temp file creation failed');
            setStatus("Temp file creation failed");
        return;
        }
    // Form data
      const formData = new FormData();
      formData.append("fileName", fileName);
      formData.append("chunkIndex", i.toString());
      formData.append("totalChunks", totalChunks.toString());
      formData.append("chunk", {
        uri: `file://${tempPath}`,
        name: `${fileName}.part${i}`,
        type: "application/octet-stream",
      });

      // Upload
      const res = await axios.post(
        `${SERVER_URL}/upload`,
        formData,
        {
    headers: formData.getHeaders ? formData.getHeaders() : {"Content-Type": "multipart/form-data"},
          timeout: 60000,
          onUploadProgress: (e) => {
            if (e.loaded && e.total) {
              const percent = Math.round(((i + e.loaded / e.total) / totalChunks) * 100);
              setProgress(percent);
            }
          },
        }
      );

      // Cleanup
      await RNFS.unlink(tempPath);

      if (res.status === 200) {
        console.log(`✅ Uploaded chunk ${i + 1}/${totalChunks}`);
         AllFilesFomServer()
      } else {
        throw new Error(`Chunk ${i} upload failed`);
      }
    }

    setProgress(100);
    setStatus(`✅ Upload complete for ${fileName}`);
  } catch (error) {
    console.error("❌ Upload failed:", error.message);
    setStatus("Upload failed!");
  }
};

//Upload Code End
// File Picker Code Start
async function pickFile(){
     setProgress(0)
     try {
    const res = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
      });
    const fileName = res.name;
    const destPath = `${RNFS.TemporaryDirectoryPath}/${fileName}`;
      // Copy content:// file to a real file:// path
     await RNFS.copyFile(res.uri, destPath);
        setDest(()=>destPath);
        setStatus(`Picked file: ${fileName}`);
     } catch (error) {
         console.log('Error picking file: ', error);
         if (DocumentPicker.isCancel(error)) {
            console.log('User cancelled the picker');
         }
     }
    }
    
async function AllFilesFomServer() {
    try {
        const response = await axios.get(`${SERVER_URL}/all-files`);
        // console.log(response.data.files)
        setFileList(response.data.files);
    } catch (error) {
        console.error("Error fetching file list:", error);
        setFileList([]);
}}
useEffect(() => {
    AllFilesFomServer();
}, []);
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center",marginTop:10 ,width:'100%'}}>
        {dest ? <GetMimeType filename={dest} /> :
     <View style={{margin:20}}>
        <Text>No file selected</Text>
     </View>   
        }
        <Text style={{ fontSize: 20, marginBottom: 20 }}>File Upload on Server</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',backgroundColor:'#ccc',padding:10,
            paddingHorizontal:30}}>
         <Button title="pick file" onPress={pickFile}/>
         <Button  title="Upload File" onPress={()=>uploadFileInChunks(dest)} />
        </View>
    <Text style={{ margin:10,fontSize:10 ,borderTopWidth:1,width:'100%',paddingHorizontal:10}}>{status}</Text>
     <View style={{width:'90%',height:10,backgroundColor:'#ccc',justifyContent:'center'}}>
         <View style={{width:`${progress}%`,height:5,backgroundColor:'#F25738'}}></View>
     </View> 
  <Text style={{fontSize:8}}>{progress}%</Text>
  <Text style={{ borderWidth:1,width:'100%',borderTopColor:'#000', textAlign:'center',fontSize: 20, 
    marginBottom: 20 }}>File Download from  Server
      <Text style={{fontSize:8,paddingLeft:10}}>Tatal Files={fileList.length}</Text>
    </Text>

      <ScrollView contentContainerStyle={{}}>
        {fileList.map((file, index) => (
        <View key={index} style={{flexDirection:'row',justifyContent:'space-between',width:'95%', borderBottomWidth:1,borderBottomColor:'#ccc',padding:5,marginBottom:5}}>
            <Text key={index} style={{ fontSize: 14 }}> {file}</Text>
            <TouchableOpacity onPress={()=>startDownload(file)}  
            style={{flexDirection:'row',alignItems:'center',gap:5}}>
             <Text style={{color:fileNm.name===file?'#F25738':'#00ff',fontWeight:'bold'}}>
               {
                fileNm.name===file?fileNm.status==='downloading'?'downloading':'downloded':'download'
               }
                </Text>
             <Icon name={ fileNm.name===file?fileNm.status==='downloading'?'refresh':'check':'download'} size={20} color="#000" />
            </TouchableOpacity>
        </View>
        ))}
      </ScrollView>
     
    </View>
  );
}


