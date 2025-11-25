import * as React from "react";
import { Dimensions, Text, View,ImageBackground } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import {data} from './data.js'
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
 

const width = Dimensions.get("window").width;
 
function BasicCarosel() {
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  
  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        autoPlay={true}
        scrollAnimationDuration={2000}
        autoPlayReverse={false}
        withAnimation={{ type: 'spring', config: { damping: 25, stiffness: 80, }, }}
     
        onProgressChange={progress}
            onConfigurePanGesture={(panGesture) => {
        // Example: require a minimum horizontal movement before activating
        panGesture
          .activeOffsetX([-10, 10]) // don’t activate until swipe passes ±10px
          .failOffsetY([-10, 10]);  // fail if user scrolls too vertical
      }}
        renderItem={({ item,index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
          <ImageBackground source={{uri:item.image}}
          style={{height:'100%',justifyContent:'center'}}
          >   
            <Text style={{ textAlign: "center", fontSize: 30,backgroundColor:'rgba(255,255,255,0.3)',color:'#ff0000' }}>
                {item.title}</Text></ImageBackground>
          </View>
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}
 
export default BasicCarosel;