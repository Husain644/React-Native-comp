import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import Myaccord from './myaccord';
import Accord3 from './accord3';

const Accordian = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    
  return (
    <>
    <Text>accordian by react native paper</Text>
    <List.Section title="Paper Accordions" style={{borderWidth:1,backgroundColor:'#ffc',marginBottom:20}}>
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
    <Text>custom accordian</Text>
     <Myaccord />
     <Accord3/>
    </>

  )
}

export default Accordian

const styles = StyleSheet.create({})