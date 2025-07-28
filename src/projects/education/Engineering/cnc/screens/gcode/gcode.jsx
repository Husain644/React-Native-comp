import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import {Language} from '../../components/utils/util'

const gcodeMcodeList = [
  {
    code: 'G00',
    en: 'Rapid positioning',
    hi: 'तेज़ स्थिति निर्धारण',
  },
  {
    code: 'G01',
    en: 'Linear interpolation',
    hi: 'सीधी गति से काटना',
  },
  {
    code: 'G02',
    en: 'Clockwise arc',
    hi: 'घड़ी की दिशा में चाप',
  },
  {
    code: 'G03',
    en: 'Counter-clockwise arc',
    hi: 'घड़ी की विपरीत दिशा में चाप',
  },
  {
    code: 'M03',
    en: 'Spindle on (clockwise)',
    hi: 'स्पिंडल चालू (घड़ी की दिशा में)',
  },
  {
    code: 'M05',
    en: 'Spindle stop',
    hi: 'स्पिंडल बंद',
  },
  {
    code: 'M06',
    en: 'Tool change',
    hi: 'उपकरण बदलना',
  },
  {
    code: 'M30',
    en: 'End of program',
    hi: 'कार्यक्रम समाप्त',
  },
];

const GCodeMCodeReference = () => {
 const isHindi=Language()==='hi'
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        {isHindi ? '🛠️ G कोड और M कोड संदर्भ' : '🛠️ G-code and M-code Reference'}
      </Text>
      {gcodeMcodeList.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.description}>{isHindi ? item.hi : item.en}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderTopWidth:1
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 12,
    backgroundColor: '#d1d7f0',
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#0984e3',
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0984e3',
  },
  description: {
    fontSize: 15,
    color: '#2d3436',
    marginTop: 4,
  },
});

export default GCodeMCodeReference;
