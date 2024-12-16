import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from "react-native";
import { React, useState, useRef,useEffect } from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { caroselData } from "../../table/data";


const Carosel1 = () => {
    const windowWidth = useWindowDimensions().width
    const scrollRef = useRef(null);
   
    const [pos,setPos]=useState(1)

    const handleScroll = (event) => {
        const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
      };
    const scroll=()=>{
   
    }
  
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.scroll}
                onScroll={handleScroll}
                scrollEventThrottle={100}
                pagingEnabled={true}
                disableIntervalMomentum={true}
                contentOffset={{ x:0,y:0}}
                ref={scrollRef}
                showsHorizontalScrollIndicator={false}
            >
                {
                    caroselData.map((item, index) => {
                        return (
                            <View key={item.id} 
            style={[styles.wrapper, { width: windowWidth }]}>
                                <Image style={styles.bannerImg} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9P1sshM3VrUz_LAKHPh5CMX1tvGuLL6jzw&s' }} />
                                <View style={styles.itmWrapper}>
                                    <View style={styles.titleWrapperLeft}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <TouchableOpacity style={styles.action}>
                                            <Text style={{}}>read more</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.titleWrapperRight}>
                                        <Text style={{ fontSize: 20, color: '#333' }}>{item.text}</Text>
                                        <Text style={{ fontSize: 25, color: '#000' }}>{item.id}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }


            </ScrollView>
            <View style={styles.control}>
                <TouchableOpacity style={styles.prev} onPress={() =>{setPos((pos)=>pos+1)}}>
                    <Text>prev</Text><Icon name="arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <View style={{ borderWidth: 1, padding: 3, borderRadius: 5, borderColor: '#ccc', flexDirection: 'row',gap:10 }} >

                  {
                    caroselData.map((item,i)=>{return(
                        <View key={item.id} style={{ width: 20, height: 20, backgroundColor: '#fff',
                            borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                            <Text style={{ width: 10, height: 10, backgroundColor: pos===i+1?'#000':'#ccc',borderRadius: 10, borderWidth: 1}}></Text>
                        </View>
                    )})
                  }

                </View>
                <TouchableOpacity style={styles.next} onPress={() =>{scroll()}}>
                    <Text>next</Text><Icon name="arrow-right" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={{padding:50}}>{windowWidth},{pos}</Text>
        </View>
    );
};

export default Carosel1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    scroll: {
    },
    wrapper: {
        backgroundColor: 'pink',
        borderRadius: 5,
        height: 350,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    },
    itmWrapper: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        position: 'absolute',
        bottom: '10%',
        alignSelf: 'center',
        maxHeight: '75%'
    },
    titleWrapperLeft: {
        gap: 20,
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    titleWrapperRight: {
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343a40',
    },
    action: {
        backgroundColor: '#f8f9fa',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10,
        borderWidth: 1,
        alignItems: 'center'
    },
    prev: {
        backgroundColor: '#f8f9fa',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    next: {
        backgroundColor: '#f8f9fa',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    }

});











