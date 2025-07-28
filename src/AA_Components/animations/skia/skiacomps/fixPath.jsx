import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useState, useEffect,useMemo,useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import roboto from "../data/roboto.ttf";
import {
usePathValue,
Canvas,
Skia,
Path,
Circle,
Text as SkiaText,
useFont,
RoundedRect,
Path1DPathEffect,
DashPathEffect } from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  withSequence,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { wordB as wordN } from "../data/data";
import { BlinkSkia, Blink } from "./utils/blink";
import { wordModify,StructureByPath,basePathStyle ,
  tracePathStyle,handPathStyle,sortPathStyle
} from "./utils/func";
import { TouchableOpacity } from "react-native";

const FixPath = () => {
  const wordA = useMemo(()=>wordModify(wordN,(positions = { x: 100, y: 100 }),(scale = 1)),[wordN]); //for scalling and positions change.
  // const BasePathStyle=useMemo(()=>{basePathStyle()})
 
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialPoint = wordA[0];
  const crntIndexPoint=wordA[currentIndex];
  const nextPoint=wordA[currentIndex+1]?wordA[currentIndex+1]:initialPoint;
  const size = 30;
  const { width, height } = useWindowDimensions();
  const font = useFont(roboto, 20);
  const MoveX = useSharedValue(initialPoint.x);  //for hand driven ball
  const MoveY = useSharedValue(initialPoint.y);
  const MoveX2 = useSharedValue(initialPoint.x); //for auto animated ball
  const MoveY2 = useSharedValue(initialPoint.y);
  const r = useSharedValue(size * 0.5); //for BlinkPoint //
 
//Base path (Word structure )  start ##################################
  const path = useMemo(()=>StructureByPath(wordA),[wordN])
  ///Gesture path logic
  const [gesturePath, setGesturePath] = useState(Skia.Path.Make().moveTo(initialPoint.x, initialPoint.y) );
  const nextPointN=nextPoint.n
  const gesturePathRef = usePathValue((p) => {
    "worklet";
    if (nextPointN) {
      gesturePath.moveTo(nextPoint.x, nextPoint.y);
    } else {
      gesturePath.lineTo(MoveX.value, MoveY.value);
    }
    return gesturePath;
  }, gesturePath);

  const gesture = Gesture.Pan()
  .onBegin((e) => {
          "worklet";
    if (wordA.length > currentIndex + 1) {
        const startingPointX = crntIndexPoint.x;
        const startingPointY = crntIndexPoint.y;
        const endPointX = nextPoint.x;
        const endPointY = nextPoint.y;
        // Static line vector math
        const dx = endPointX - startingPointX;
        const dy = endPointY - startingPointY;
        const lengthSq = dx * dx + dy * dy;
        const px = e.x - startingPointX;
        const py = e.y - startingPointY;
        const t = Math.max(0, Math.min(1, (px * dx + py * dy) / lengthSq));
        MoveX.value = startingPointX + t * dx;
        MoveY.value = startingPointY + t * dy;
        if (Math.sqrt((e.x - endPointX) ** 2 + (e.y - endPointY) ** 2) < 40) {
          MoveX.value = endPointX;
          MoveY.value = endPointY;
          setCurrentIndex((prev) => {
            if (prev < wordA.length - 1) {
              return prev + 1;
            } else {
              return prev;
            }
          });
        }
      }
  }).onUpdate((e) => {
      "worklet";
    if (wordA.length > currentIndex + 1) {
        const startingPointX = crntIndexPoint.x;
        const startingPointY = crntIndexPoint.y;
        const endPointX = nextPoint.x;
        const endPointY = nextPoint.y;
        // Static line vector math
        const dx = endPointX - startingPointX;
        const dy = endPointY - startingPointY;
        const lengthSq = dx * dx + dy * dy;
        const px = e.x - startingPointX;
        const py = e.y - startingPointY;
        const t = Math.max(0, Math.min(1, (px * dx + py * dy) / lengthSq));
        MoveX.value = startingPointX + t * dx;
        MoveY.value = startingPointY + t * dy;
        if (Math.sqrt((e.x - endPointX) ** 2 + (e.y - endPointY) ** 2) < 20) {
          MoveX.value = endPointX;
          MoveY.value = endPointY;
          setCurrentIndex((prev) => {
            if (prev < wordA.length - 1) {
              return prev + 1;
            } else {
              return prev;
            }
          });
        }
    }}).runOnJS(true);

  const AnimStyle = useAnimatedStyle(() => {
    const x1 = crntIndexPoint?.x;
    const y1 = crntIndexPoint?.y;
    const x2 = wordA.length > currentIndex + 1 ? nextPoint.x : initialPoint.x;
    const y2 = wordA.length > currentIndex + 1 ? nextPoint.y : initialPoint.y;
    const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
    return {
      left: MoveX.value - 15,
      top: MoveY.value - 15,
      transform: [{ rotate: `${angle - 90}deg` }],
    };
  });
 // Animation path for handDraw path //############################################################################
  const [animPath, setAnimPath] = useState(Skia.Path.Make().moveTo(initialPoint.x, initialPoint.y));
  const handPointSkip = useSharedValue(true);
  const handAnimPath = usePathValue((p) => {
    "worklet";
    if (handPointSkip.value) {
      // console.log(MoveX2.value, MoveY2.value)
      animPath.lineTo(MoveX2.value, MoveY2.value);
    }
    return animPath;
  }, animPath);

useEffect(() => {
    const time = 20;
    MoveX2.value = withRepeat(
      withSequence(
        ...wordA.map((item, i) => {
          const dx = wordA[i].x - wordA[i - 1]?.x;
          const dy = wordA[i].y - wordA[i - 1]?.y;
          const t = Math.sqrt(dx * dx + dy * dy) * time;
          const Time = t && !wordA[i]?.n ? t : 100;
          if (wordA.length > i + 1) {
            return withTiming(item.x, { duration: Time }, (success) => {
              if (success) {
                if( wordA[i+1]?.n){
                   handPointSkip.value =false;
                }else{
                animPath.moveTo(item.x,item.y) 
                 handPointSkip.value = true;
                }
              }
            });
          } else {
            return withSequence(
              withTiming(item.x, { duration: Time }, () => {
                console.log('running with timing')
               handPointSkip.value =false;
              }),
              withTiming(initialPoint.x, { duration: Time }, () => {
                 animPath.moveTo(initialPoint.x,initialPoint.y) 
                 handPointSkip.value = true;
              })
            );
          }
        })
      ),
      2
    );
    MoveY2.value = withRepeat(
      withSequence(
        ...wordA.map((item, i) => {
          const dx = wordA[i].x - wordA[i - 1]?.x;
          const dy = wordA[i].y - wordA[i - 1]?.y;
          const t = Math.sqrt(dx * dx + dy * dy) * time;
          const Time = t && !wordA[i]?.n ? t : 100;
          if (wordA.length > i + 1) {
            return withTiming(item.y, { duration: Time });
          } else {
            return withSequence(
              withTiming(item.y, { duration: Time }),
              withTiming(initialPoint.y, { duration: Time })
            );
          }
        })
      ),
      2
    );
    r.value = withRepeat(withTiming(size * 0.33, { duration: 1000 }), -1, true);
  }, []);
  const AnimStyle2 = useAnimatedStyle(() => {
    return {
      left: MoveX2.value - 15,
      top: MoveY2.value - 15,
    };
  });
  ///shorts anim path  start code #############################################################################
  const [shortsPath, setShortPath] = useState(Skia.Path.Make().moveTo(initialPoint.x, initialPoint.y));
  const shortPathSkip = useSharedValue(false);
  const newWords = wordA.slice(currentIndex, currentIndex + 2); //list of movements for shorts anim
  const MoveShortX = useSharedValue(newWords[0].x);
  const MoveShortY = useSharedValue(newWords[0].y);
  const shortsPathRef = usePathValue((p) => {
    "worklet";
    if (!shortPathSkip.value) {
      if (newWords[0].x === MoveShortX.value & newWords[0].y === MoveShortY.value) {
      shortsPath.reset();
      shortsPath.moveTo(MoveShortX.value, MoveShortY.value);
      } 
      else shortsPath.lineTo(MoveShortX.value, MoveShortY.value);
    } else
    {
      shortsPath.moveTo(MoveShortX.value, MoveShortY.value);
    }
  }, shortsPath);
  useEffect(() => {
    const time = 20;
    MoveShortX.value = withRepeat(
      withSequence(
        ...newWords.map((item, i) => {
          const dx = newWords[i].x - newWords[i + 1]?.x;
          const dy = newWords[i].y - newWords[i + 1]?.y;
          const t = Math.sqrt(dx * dx + dy * dy) * time;
          const Time = t && !newWords[i]?.n ? t : 2000;
          if (wordA.length > i + 1) {
            return withTiming(item.x, { duration: Time }, (success) => {
              "worklet";
              if (success) {
                if (newWords[i + 1]?.n) {
                   shortPathSkip.value = true;
                } else {
                   shortPathSkip.value = false;
                }
              }
            });
          } else {
            return withSequence(
              withTiming(item.x, { duration: Time }, () => {
                shortPathSkip.value = true;
              })
            );
          }
        })
      ),
      3
    );
    MoveShortY.value = withRepeat(
      withSequence(
        ...newWords.map((item, i) => {
          const dx = newWords[i].x - newWords[i + 1]?.x;
          const dy = newWords[i].y - newWords[i + 1]?.y;
          const t = Math.sqrt(dx * dx + dy * dy) * time;
          const Time = t && !newWords[i]?.n ? t : 2000;
          if (wordA.length > i + 1) {
            return withTiming(item.y, { duration: Time });
          } else {
            return withSequence(withTiming(item.y, { duration: Time }));
          }
        })
      ),
      3
    );
  });
  const shortsPathBall = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: MoveShortX.value - 10 },
        { translateY: MoveShortY.value - 10 },
      ],
    };
  });

  return (
    <View style={{ padding: 0 }}>
      <GestureDetector gesture={gesture}>
        <View
          style={{
            width: width,
            height: height > 350 ? 350 : height,
            backgroundColor: "#ccc",
          }}
        >
          <Animated.View
            style={[
              {
                height: size,
                borderRadius: 15,
                width: size,
                backgroundColor: "green",
                alignItems: "center",
                zIndex: 1,
              },
              AnimStyle,
            ]}
          >
            <Icon
              name="caret-up"
              color={"#fff"}
              size={45}
              style={{ top: -10 }}
            />
          </Animated.View>
          <Canvas
            style={{
              position: "absolute",
              width: width,
              height: height > 350 ? 350 : height,
            }}
          >
            {wordA.map((p, i) =>
              currentIndex + 1 === i ? (
                <Circle key={i} cx={p.x} cy={p.y} r={r} color="red" />
              ) : (
                <Circle key={i} cx={p.x} cy={p.y} r={2} color="#4a148c" />
              )
            )}
            <Path  path={path}          paint={basePathStyle}/>
            <Path  path={gesturePathRef} paint={tracePathStyle}/>
            {/* <Path  path={handAnimPath}  paint={handPathStyle} /> */}
            <Path  path={shortsPathRef} paint={sortPathStyle}/>
            <SkiaText
              x={10}
              y={20}
              text="Hello Skia!"
              font={font}
              color="red"
            />
            <RoundedRect
              x={70}
              y={50}
              style="stroke"
              strokeWidth={1}
              width={250}
              height={280}
              r={25}
              color="#000"
            />
          </Canvas>
          <Animated.View
            style={[
              shortsPathBall,
              {
                width: 20,
                height: 20,
                backgroundColor: "#eaea",
                borderRadius: 10,
                position: "absolute",
                zIndex: 11,
                borderWidth: 1,
              },
            ]}
          >
              <Icon5
              name="hand-point-up"
              color={"#fff"}
              size={20}
              style={{ top: 0, left: 0 }}
            />
          </Animated.View>
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 60,
                borderRadius: 15,
                width: 45,
                zIndex: 1,
                transform: [{ rotate: "-20deg" }],
              },
              AnimStyle2,
            ]}
          >
            {/* <Icon5
              name="hand-point-up"
              color={"#000"}
              size={45}
              style={{ top: 5, left: 5 }}
            /> */}
          </Animated.View>
        </View>
      </GestureDetector>
      <TouchableOpacity
        onPress={() => {
          MoveX.value = initialPoint.x;
          MoveY.value = initialPoint.y;
          setCurrentIndex(0);
          setGesturePath(Skia.Path.Make().moveTo(initialPoint.x, initialPoint.y));
          setAnimPath(Skia.Path.Make().moveTo(initialPoint.x, initialPoint.y));
    
        }}
        style={{
          margin: 30,
          backgroundColor: "blue",
          width: 160,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            paddingVertical: 10,
            textAlign: "center",
          }}
        >
          Click Me To Reset{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default FixPath;

const styles = StyleSheet.create({});
