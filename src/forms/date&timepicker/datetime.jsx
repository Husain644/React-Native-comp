import { StyleSheet, Text, View,Button } from 'react-native'
import {React,useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default DateTime

const styles = StyleSheet.create({})