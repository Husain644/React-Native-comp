import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ExpHome from './expence_share/expHome';
import Rapido from './transport/rapido_clone/rapido';
import RapidoByRitik from './transport/Rapido_By_Ritik/home';
import App_fresh from './fresh_to_home_src/app_fresh';
import HomeLkg from './education/lkg/home';
import CncHome from './education/Engineering/cnc/home';

const ProjectHome = () => {
  const [selected, setSelected] = useState(null);

  // List of components
  const components = [
    { name: 'ExpHome', component: <ExpHome /> },
    { name: 'Rapido', component: <Rapido /> },
    { name: 'RapidoByRitik', component: <RapidoByRitik /> },
    { name: 'AppFresh', component: <App_fresh /> },
    { name: 'HomeLkg', component: <HomeLkg /> },
    { name: 'CncHome', component: <CncHome /> },
  ];

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <ScrollView horizontal style={styles.buttonContainer} showsHorizontalScrollIndicator={false}>
        {components.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selected === index && styles.buttonSelected,
            ]}
            onPress={() => setSelected(index)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Render selected component */}
      <View style={styles.componentContainer}>
        {selected !== null && components[selected].component}
        {selected === null && <Text style={styles.infoText}>Select a project to view</Text>}
      </View>
    </View>
  );
};

export default ProjectHome;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fdfdfd' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 15, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', marginBottom: 15,backgroundColor: '#918a8a',maxHeight:42},
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    height:40
  },
  buttonSelected: {
    backgroundColor: '#FF6C63',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  componentContainer: { flex: 1, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 15 },
  infoText: { textAlign: 'center', color: '#888', fontSize: 16 },
});
