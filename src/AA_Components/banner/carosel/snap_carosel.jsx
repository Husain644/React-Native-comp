// import React, { useEffect, useRef, useState } from 'react';
// import { StyleSheet, View, useWindowDimensions } from 'react-native';
// import Animated, {
//   scrollTo,
//   useAnimatedRef,
//   useAnimatedScrollHandler,
//   useDerivedValue,
//   useSharedValue,
// } from 'react-native-reanimated';


// const CustomCarousel = () => {
//   const x = useSharedValue(0);
//   const [data, setData] = useState(animals);
//   const { width } = useWindowDimensions();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [paginationIndex, setPaginationIndex] = useState(0);
//   const ref = useAnimatedRef();
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const interval = useRef();
//   const offset = useSharedValue(0);

//   console.log('CURRENT_CAROUSEL_ITEM👉', paginationIndex);

//   const onViewableItemsChanged = ({ viewableItems }) => {
//     if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
//       setCurrentIndex(viewableItems[0].index);
//       setPaginationIndex(viewableItems[0].index % animals.length);
//     }
//   };

//   const viewabilityConfig = {
//     itemVisiblePercentThreshold: 50,
//   };

//   const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

//   const onScroll = useAnimatedScrollHandler({
//     onScroll: (e) => {
//       x.value = e.contentOffset.x;
//     },
//     onMomentumEnd: (e) => {
//       offset.value = e.contentOffset.x;
//     },
//   });

//   useDerivedValue(() => {
//     scrollTo(ref, offset.value, 0, true);
//   });

//   useEffect(() => {
//     if (isAutoPlay === true) {
//       interval.current = setInterval(() => {
//         offset.value += width;
//       }, 4000);
//     } else {
//       clearInterval(interval.current);
//     }
//     return () => {
//       clearInterval(interval.current);
//     };
//   }, [isAutoPlay, offset, width]);

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         ref={ref}
//         style={{ height:200, flexGrow: 0 }}
//         onScrollBeginDrag={() => {
//           setIsAutoPlay(false);
//         }}
//         onScrollEndDrag={() => {
//           setIsAutoPlay(true);
//         }}
//         onScroll={onScroll}
//         scrollEventThrottle={16}
//         horizontal
//         bounces={false}
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
//         onEndReached={() => setData([...data, ...animals])}
//         onEndReachedThreshold={0.5}
//         data={data}
//         keyExtractor={(_, index) => `list_item${index}`}
//         renderItem={({ item, index }) => {
//           return <RenderItem item={item} index={index} x={x} />;
//         }}
//       />
//       <Pagination paginationIndex={paginationIndex} />
//     </View>
//   );
// };

// export default CustomCarousel;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     gap: 14,
//   },
// })



// const Pagination = ({ paginationIndex }) => {
//   return (
//     <View style={styles2.container}>
//       {animals.map((_, index) => {
//         return <Dot index={index} key={index} paginationIndex={paginationIndex} />;
//       })}
//     </View>
//   );
// };

// const styles2 = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginTop: hpx(16),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// const Dot = ({ index, paginationIndex }) => {
//   return <View style={paginationIndex === index ? styles3.dot : styles3.dotOpacity} />;
// };



// const styles3 = StyleSheet.create({
//   dot: {
//     backgroundColor: Colors.white,
//     height: hpx(3),
//     width: wpx(12),
//     marginHorizontal: 2,
//     borderRadius: 8,
//   },
//   dotOpacity: {
//     backgroundColor: Colors.white,
//     height: hpx(3),
//     width: wpx(12),
//     marginHorizontal: 2,
//     borderRadius: 8,
//     opacity: 0.5,
//   },
// })


// const RenderItem = ({ item, index, x }) => {
//   const { width } = useWindowDimensions();

//   const animatedStyle = useAnimatedStyle(() => {
//     const opacityAnim = interpolate(
//       x.value,
//       [(index - 1) * width, index * width, (index + 1) * width],
//       [-0.3, 1, -0.3],
//       Extrapolation.CLAMP
//     );
//     return {
//       opacity: opacityAnim,
//     };
//   });

//   return (
//     <View style={{ width }}>
//       <Animated.Image
//         resizeMode="cover"
//         source={{ uri: item.image }}
//         style={[styles4.titleImage, animatedStyle]}
//       />
//     </View>
//   );
// };
// const styles4 = StyleSheet.create({
//   titleImage: {
//     width: SCREEN_WIDTH - wpx(32), // adjust the width of the image and horizontal padding
//     height: hpx(194),
//     alignSelf: 'center',
//     borderRadius: nf(16),
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Snap_carosel = () => {
  return (
    <View>
      <Text>sSnap_carosel</Text>
    </View>
  )
}

export default Snap_carosel

const styles = StyleSheet.create({})
