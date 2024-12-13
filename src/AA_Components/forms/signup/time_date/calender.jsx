import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const Calndr = () => {
    const [date, setDate] = React.useState(
        {
            dateString: '2024-12-03',
            day: 0,
            month: 0,
            timestamp: 0,
            year: 0,
        })
    console.log(date)
    //{"dateString": "2024-12-11", "day": 11, "month": 12, "timestamp": 1733875200000, "year": 2024}
    console.log(date)
    return (
        <View><Text>calndr</Text>
            <View style={{ width: '100%', padding: 2, backgroundColor: '#ccc' }}>
                <Calendar style={{
                    borderWidth: 5,
                    borderColor: 'pink',
                    height: 350,
                    backgroundColor: '#fff'
                }} onDayPress={day => { setDate(day) }}
                    markedDates={{
                        [date.dateString]: { selected: true, marked: true, selectedColor: 'blue' },
                        '2024-12-01': { marked: true },
                    }} />
            </View>
            <Text>{date.dateString}</Text>
            <Text>{date.day}</Text>
            <Text>{date.month}</Text>
            <Text>{date.year}</Text>
            <Text>{date.timestamp}</Text>
        </View>
    )
}

export default Calndr

const styles = StyleSheet.create({})