import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { Svg } from "../../../assets/data";
import Icon from "react-native-vector-icons/FontAwesome";
import LottieView from 'lottie-react-native';
import Cleaning from '../../../assets/animations/cleaning.json'
import ColorWheel from '../../../assets/animations/colorwheel.json'
import Arrow from '../../../assets/animations/arrow.json'
import {
  usePathValue,
  Canvas,
  Skia,
  Path,
  DashPathEffect,
  Group,
} from "@shopify/react-native-skia";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Sound from "react-native-sound";
import aforSound from "./../../../assets/audios/text_voice/afor.mp3";
import img from "../../../assets/images/a_for_apple.jpeg";

const colorOption = ["green", "red", "pink", "yellow", "black", "#999"];

const FreeHand = () => {
  const { width, height } = useWindowDimensions();
  const [color, setColor] = useState("#999");
  const [silent, setSilent] = useState(true);
  const Pos = useSharedValue({ x: 200, y: 200 });
  const start = useSharedValue({ x: 0, y: 0 });
  const [path, setPath] = useState(Skia.Path.Make());

  const newPath = usePathValue((p) => {
    "worklet";
  }, path);

  const panGesture = Gesture.Pan()
    .onBegin((e) => {
      Pos.value = { x: e.x, y: e.y };
      path.moveTo(e.x, e.y);
    })
    .onUpdate((e) => {
      path.lineTo(e.x, e.y);
      Pos.value = { x: e.x, y: e.y };
    })
    .onEnd((e) => {
      start.value = { x: e.x, y: e.y };
    });

  const AnimStyle = useAnimatedStyle(() => {
    return {
      left: Pos.value.x,
      top: Pos.value.y,
    };
  });

  const clip = Skia.Path.MakeFromSVGString(Svg[4].sv);
  const scale = 8;
  const matrix = Skia.Matrix();
  matrix.scale(scale, scale);
  matrix.translate(0, -20);
  const scaledPath = clip.copy().transform(matrix);

  const soundRef = useRef(null);

  useEffect(() => {
    const sound = new Sound(aforSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("Failed to load the sound", error);
        return;
      }
    });
    soundRef.current = sound;
    return () => {
      sound.release();
    };
  }, []);

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  useEffect(() => {
    if (!silent) {
      setTimeout(playSound, 1000);
    }
  }, [silent]);

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, { width: width * 0.95 }]}>
        <TouchableOpacity
          style={styles.soundBtn}
          onPress={() => setSilent(!silent)}
          activeOpacity={0.5}
        >
          {silent ? (
            <Icon name="volume-off" size={30} color="#000" />
          ) : (
            <Icon name="volume-up" size={30} color="#000" />
          )}
        </TouchableOpacity>

        <ImageBackground
          source={img}
          resizeMode="stretch"
          style={styles.image}
        />

        <View style={styles.canvasWrapper}>
          <GestureDetector gesture={panGesture}>
            <Canvas style={styles.canvas}>
              <Group>
                <Path path={newPath}color={color}style="stroke"strokeWidth={30} />
                <Path path={scaledPath}color="#000"style="stroke"strokeWidth={4}>
                  <DashPathEffect intervals={[4, 4]} />
                </Path>
              </Group>
            </Canvas>
          </GestureDetector>
          <Animated.View style={[AnimStyle, styles.animStyles]}>
            <Icon name="caret-up" color={color} size={45} style={{ top: -8, right: -6, zIndex: 1 }}/>
          </Animated.View>
        </View>
        <View style={styles.colorPalleteWrapper}>
               <TouchableOpacity
          onPress={() => {  setPath(Skia.Path.Make()); Pos.value = withSpring({ x: 200, y: 200 });
          }}
          style={styles.refreshBtn}
        >
            <LottieView  style={{height:50,width:50}}
            source={Cleaning} autoPlay loop />
              <Text style={styles.refreshText}>refresh</Text>
        </TouchableOpacity>

        <View style={styles.colorPallete}>
          {colorOption.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.colorBall, { backgroundColor: item }]}
              onPress={() => setColor(item)}
             >
              <LottieView  style={{height:40,width:50,zIndex:-1,position:'absolute' }}   source={ColorWheel} autoPlay loop /></TouchableOpacity>
          ))}
        </View>
        </View>
      </View>
    </View>
  );
};

export default FreeHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "92%",
    borderWidth: 1,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: 220,
  },
  canvasWrapper: {
    width: 300,
    borderWidth: 1,
    padding: 20,
  },
  canvas: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
  },
  soundBtn: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    padding: 5,
    zIndex: 10,
    transform: [{ rotate: "20deg" }],
  },
  refreshBtn: {
    width: 50,
    height: 50,
    backgroundColor:'#fff',
    borderRadius: 10,
    alignItems: "center",
    borderWidth:1,
  },
  refreshText: {
    fontSize: 12,
    textAlign: "center",
    position:'absolute',
    bottom:0
  },
  colorPalleteWrapper:{
    backgroundColor:'#aaeceeaa',
    height:'100%',
    padding:10,
    flex:1
  },
  colorPallete: {
    position:'absolute',
    right:5,
    width:50,
    backgroundColor: "#c2afaf",
    alignItems:'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
    marginLeft: 5,

  },
  colorBall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    marginVertical: 4,
  },
  animStyles: {
    width: 40,
    height: 40,
    backgroundColor: "#eaea",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 20,
    zIndex: -1,
  },
});
