import {View, Text, Button,TouchableOpacity,SafeAreaView,FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs'; 

function  ReactNativeFsHome() {
  const [files, setFiles] = useState([]);

  const getFileContent = async (path) => {
    const reader = await RNFS.readDir(path);
    setFiles(reader);
  };
  useEffect(() => {
    getFileContent(RNFS.DocumentDirectoryPath); //run the function on the first render.
  }, []);
  //this component will render our list item to the UI
  const Item = ({ name, isFile }) => {
    return (
      <View>
        <Text style={styles.name}>Name: {name}</Text>
        <Text> {isFile ? "It is a file" : "It's a folder"}</Text>
      </View>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.title}>{index}</Text>
        {/* The isFile method indicates whether the scanned content is a file or a folder*/}
        <Item name={item.name} isFile={item.isFile()} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
export default ReactNativeFsHome;