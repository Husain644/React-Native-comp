import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {React,useState,useRef} from 'react'
import { useSharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const Carosel = () => {


const scrollXOffset = useSharedValue(0);
const [isFirstCard, setIsFirstCard] = useState(scrollXOffset.value === 0);
const [isLastCard, setIsLastCard] = useState(false);
const [scrollViewWidth, setScrollViewWidth] = useState(0);

const scrollRef = useRef<Animated.ScrollView>(null);
const handleContentSizeChange = (width, height) => { 
  setScrollViewWidth(width);
};
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View style={{overflow:'visible'}}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          scrollEventThrottle={16}
          decelerationRate={0}
          style={{overflow:'visible'}}
          contentContainerStyle={{overflow:'visible',paddingLeft:4,paddingRight:4}}
          onContentSizeChange={handleContentSizeChange}
        >
          {carouselItems.map((item, index) => (
            <GalleryCarouselItem
              key={index}
              {...{
                item,
                index,
                scrollXOffset,
                handleCarouselItemPress,
                scrollViewWidth,
              }}
            />
          ))}
        </Animated.ScrollView>
        <Animated.View style={{flexDirection:'row',padding:4}}>
          <Pressable
            disabled={isFirstCard}
            onPress={goToPrevious}
            style={({ pressed }) =>
              tailwind.style(
                pressed ? "bg-gray-100 rounded-xl" : "",
                "mr-2 p-2",
              )
            }
          >
            <Animated.View style={tailwind.style("")}>
              <ArrowLeft
                stroke={isFirstCard ? tailwind.color("bg-gray-400") : "black"}
              />
            </Animated.View>
          </Pressable>
          <Pressable
            disabled={isLastCard}
            onPress={goToNext}
            style={({ pressed }) =>
              tailwind.style(
                pressed ? "bg-gray-100 rounded-xl" : "",
                "mr-2 p-2",
              )
            }
          >
            <Animated.View style={tailwind.style("")}>
              <ArrowRight
                stroke={isLastCard ? tailwind.color("bg-gray-400") : "black"}
              />
            </Animated.View>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

export default Carosel

const styles = StyleSheet.create({
 mainContainer:{
  flex:1,
  justifyContent:'center',
backgroundColor:'#FFFFFF'}
})