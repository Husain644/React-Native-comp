import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react';
import { Language } from '../../components/utils/util'
import img from '../../data/assets/images/chuck.jpg'


const CNCIntroduction = () => {
const isHindi = Language() === 'hi';
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>🛠️ {isHindi ? 'CNC क्या है?' : 'What is CNC?'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? 'CNC का मतलब होता है कंप्यूटर न्यूमेरिकल कंट्रोल। यह एक तरीका है मशीन टूल्स को सॉफ्टवेयर द्वारा ऑटोमेटिक रूप से नियंत्रित करने का। CNC मशीनें कंप्यूटर प्रोग्राम (G-code) का उपयोग करके सटीक गति और संचालन को नियंत्रित करती हैं।'
          : 'CNC stands for Computer Numerical Control. It is a method of automating the control of machine tools using software programmed on a computer. CNC machines use a computer program (G-code) to precisely control movement and operations.'}
      </Text>

      <Text style={styles.heading}>💡 {isHindi ? 'मूल विचार' : 'Basic Concept'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? 'CNC सिस्टम कंप्यूटर का उपयोग करके:\n• उपकरणों या कार्यपीस की गति को नियंत्रित करता है\n• G-code जैसे कोडेड प्रोग्राम का पालन करता है\n• कटाई, ड्रिलिंग, टर्निंग, मिलिंग जैसे कार्य करता है'
          : 'CNC systems use a computer to:\n• Control the movement of tools or workpieces\n• Follow a coded program to make parts (usually in G-code)\n• Automatically perform machining tasks like cutting, drilling, turning, or milling'}
      </Text>

      <Text style={styles.heading}>🔧 {isHindi ? 'मुख्य घटक' : 'Main Components'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? '• Controller – सिस्टम का दिमाग जो प्रोग्राम चलाता है\n• Machine Tool – लेथ या मिलिंग मशीन जैसी फिजिकल मशीन\n• Program – G-code या M-code में लिखा जाता है\n• Drive System – मोटर जो मशीन को चलाते हैं\n• Feedback System – सेंसर जो स्थिति और सटीकता की पुष्टि करते हैं'
          : '• Controller – The brain of the system that runs the program\n• Machine Tool – The physical device like a lathe or milling machine\n• Program – Written in G-code or M-code\n• Drive System – Motors that move the machine\n• Feedback System – Sensors for accuracy and positioning'}
      </Text>

      <Text style={styles.heading}>⚙️ {isHindi ? 'सामान्य CNC मशीनें' : 'Common CNC Machines'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? '1. CNC Lathe – बेलनाकार भागों के लिए\n2. CNC Milling Machine – ठोस पदार्थों को काटने और आकार देने के लिए\n3. CNC Router – लकड़ी और सॉफ्ट मटेरियल्स के लिए\n4. CNC Plasma Cutter – मेटल शीट्स काटने के लिए\n5. CNC Laser Cutter – बारीक और सटीक कटिंग के लिए'
          : '1. CNC Lathe – for turning cylindrical parts\n2. CNC Milling Machine – for cutting and shaping solid materials\n3. CNC Router – used for wood and soft materials\n4. CNC Plasma Cutter – for cutting metal sheets\n5. CNC Laser Cutter – for fine, detailed cutting'}
      </Text>

      <Text style={styles.heading}>✅ {isHindi ? 'फायदे' : 'Benefits of CNC'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? '🎯 उच्च सटीकता\n🔁 बार-बार एक जैसे पार्ट्स बनाना आसान\n⏱️ तेज उत्पादन\n🧑‍🔧 कम मानव त्रुटि\n🧠 जटिल आकृतियों का निर्माण संभव'
          : '🎯 High accuracy and precision\n🔁 Repeatability for mass production\n⏱️ Faster output\n🧑‍🔧 Reduces human error\n🧠 Capable of producing complex shapes'}
      </Text>

      <Text style={styles.heading}>❌ {isHindi ? 'सीमाएँ' : 'Limitations'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? '💰 महंगे होते हैं और रखरखाव की जरूरत होती है\n🧑 कुशल ऑपरेटर की जरूरत होती है\n🖥️ जटिल प्रोग्राम तैयार करने में समय लगता है'
          : '💰 Expensive to buy and maintain\n🧑 Requires skilled operators\n🖥️ Takes time to program complex parts'}
      </Text>

      <Text style={styles.heading}>🏭 {isHindi ? 'उपयोग' : 'Applications'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? '• एयरोस्पेस घटक\n• ऑटोमोटिव पार्ट्स\n• इलेक्ट्रॉनिक बोर्ड्स\n• धातु और प्लास्टिक निर्माण\n• चिकित्सा उपकरण'
          : '• Aerospace components\n• Automotive parts\n• Electronics and circuit boards\n• Metal & plastic manufacturing\n• Medical devices'}
      </Text>

      <Text style={styles.heading}>🔄 {isHindi ? 'सरल उदाहरण' : 'Simple Example'}</Text>
      <View style={styles.codeBlock}>
        <Text style={styles.code}>G21         ; {isHindi ? 'मिलीमीटर में यूनिट सेट करें' : 'Set units to mm'}</Text>
        <Text style={styles.code}>G90         ; {isHindi ? 'सापेक्ष स्थिति उपयोग करें' : 'Use absolute positioning'}</Text>
        <Text style={styles.code}>G1 X50 Y0   ; {isHindi ? '(50, 0) तक जाएं' : 'Move to (50, 0)'}</Text>
        <Text style={styles.code}>G1 X50 Y50  ; {isHindi ? '(50, 50) तक काटें' : 'Cut to (50, 50)'}</Text>
      </View>

      <Text style={styles.heading}>🎓 {isHindi ? 'सारांश' : 'Summary'}</Text>
      <Text style={styles.paragraph}>
        {isHindi
          ? 'CNC एक आधुनिक तरीका है जो कंप्यूटर प्रोग्राम के द्वारा मशीनों को ऑटोमेट करता है। यह इंडस्ट्री 4.0 और स्मार्ट मैन्युफैक्चरिंग में महत्वपूर्ण भूमिका निभाता है।'
          : 'CNC is a modern method to automate machines using computer programs. It is used across industries and is key to smart manufacturing and Industry 4.0.'}
      </Text>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2c3e50',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 12,
  },
  codeBlock: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CNCIntroduction;
