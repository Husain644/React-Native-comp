import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const Flat_List = () => {
    const data=[
        {id:1,name:'husain'},{id:2,name:'asif'},
        {id:3,name:'tinu'},{id:4,name:'rasid'},
        {id:5,name:'tom'}]
  return (
    <View>
      <Text>Flat_List</Text>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal={true}
        numColumns={1} //Muliple columns can only rerender with  horizontal={false} and will zig-zag like a flexWrap layout
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<View><Text>Empty</Text></View>}
        ListHeaderComponent={<View><Text>This is header component that is show at the top</Text></View>}
        ListHeaderComponentStyle={{backgroundColor: 'lightGray'}}
        ListFooterComponent={<View><Text>this is Footer that is show in at the bottom </Text></View>}
        ListFooterComponentStyle={{backgroundColor: 'white'}}
        columnWrapperStyle={{}}  //Optional custom style for multi-item rows generated when  numColumn > 1.
        initialNumToRender={15} //default is 10
        initialScrollIndex={1}
        inverted={false} //reverse the direction of scroll.uses scale transforms of -1
        refreshing={false}
        renderItem={({item})=>(
          <Text style={{fontSize:20,margin:10}}>{item.name}</Text>
        )}/>
    </View>
  )
}

export default Flat_List

const styles = StyleSheet.create({})