import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComp = () => (
 <>
  <Button icon="camera" mode="text" onPress={() => console.log('Pressed')}>
    Text button
  </Button>
  <Button icon="camera" mode="contained" buttonColor='green' textColor='#fff' rippleColor='blue' 
      disabled={true} uppercase={true}
 onPress={() => console.log('Pressed')}>
    contained
  </Button>
  <Button icon="camera" mode="outlined" dark='false'  onPress={() => console.log('Pressed')}>
    Outlined 
  </Button>
 </>
);

export default ButtonComp;