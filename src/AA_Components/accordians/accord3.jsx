import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
  } from 'react-native-reanimated';
import { FontIcon} from '../../assets/assets';

const Accord3 = () => {
    const val=useSharedValue(0)
    const animatedStyles = useAnimatedStyle(() => ({
        height:val.value
      }));
    const handler=()=>{
        if (val.value>0){val.value=withTiming(0, { duration: 1000 })}
        else {val.value=withTiming(150, { duration: 1000 })}
        
    }
  return ( 
    <View>
      <Text>Accord3</Text>
      <View style={{borderWidth:1}}>
        <TouchableOpacity onPress={handler}
         style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>this is title</Text>
            <FontIcon name='chevron-down' />
        </TouchableOpacity>
        <Animated.ScrollView style={[styles.box, animatedStyles]}  >
            
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos repellendus, voluptate impedit, magnam delectus veritatis, iusto doloribus nostrum praesentium beatae minus nisi similique nam quam molestias ad iure cupiditate.
            Animi eaque nesciunt autem qui, tempore, maiores laudantium porro nam assumenda libero distinctio ea voluptate officia! Consequuntur quidem est vel, odit facere tenetur quia maxime doloribus sunt maiores, qui temporibus.
            Quo repudiandae maiores optio, unde rem ut asperiores! Similique id voluptas deserunt. Eligendi odio quam dicta magnam, cum similique at temporibus amet error fuga dolore nobis tempore, dignissimos, accusantium ipsum!
            Aspernatur pariatur consequatur repellat mollitia blanditiis numquam maiores officiis? Distinctio architecto temporibus non dolores doloremque saepe tempore ducimus enim, fuga, ipsa cumque accusamus expedita. Dolores voluptates ducimus incidunt aliquam nobis!
            Cum a aspernatur quaerat, maiores voluptatum voluptates, facilis amet sint neque, pariatur quo nisi alias. Delectus rem tempora aperiam saepe dolorem, animi consectetur error dolor eligendi, nihil suscipit, a fugiat!
            Nulla perspiciatis voluptatem nesciunt, nihil sit quos ut quod recusandae omnis excepturi optio magni perferendis aspernatur autem corporis dolore nemo voluptatum non ex? Animi, laboriosam iste. Unde eius eum inventore?
            Asperiores natus fuga quam, vel, accusantium, odio magnam neque corporis similique nisi eum dolore fugit optio accusamus aut assumenda? Voluptatibus temporibus nulla nihil dignissimos doloribus. Vero esse ipsum consequuntur recusandae!
            Dolorum ab earum fuga odit, dolorem aspernatur corporis natus et exercitationem alias dolores atque deleniti accusamus, debitis magnam ratione voluptate commodi, tenetur quisquam. Libero necessitatibus commodi quia sed, doloremque adipisci.
            Praesentium incidunt ipsa quis, earum perferendis mollitia consequuntur neque eveniet eaque dolorum laudantium fuga omnis natus doloremque et necessitatibus hic temporibus id consectetur assumenda quidem. Quam vero esse officia enim!
            Inventore corporis maxime libero sequi numquam praesentium temporibus soluta quidem, molestiae blanditiis repudiandae dicta voluptatibus ad veritatis optio. Dicta, voluptatibus quidem molestiae magni voluptates debitis. Facilis nulla exercitationem optio est?</Text>
        </Animated.ScrollView>
      </View>
    </View>
  )
}

export default Accord3

const styles = StyleSheet.create({
    box:{

    }
})