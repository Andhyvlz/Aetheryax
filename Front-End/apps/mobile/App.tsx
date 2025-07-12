import { StatusBar } from 'expo-status-bar';
import { Image, Linking, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.logoRow}>
        <Pressable onPress={() => Linking.openURL('https://vite.dev')}>
          <Text style={styles.heading}>Vite</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://www.typescriptlang.org')}>
          <Text style={styles.heading}>Typescript</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://sass-lang.com')}>
          <Text style={styles.heading}>Scss</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://react.dev')}>
          <Text style={styles.heading}>React</Text>
        </Pressable>
      </View>
       <Text style={styles.heading}>Vite + (Typescript + Scss + React)</Text>

      <View style={styles.card}>
        <Text style={styles.note}>
          Edit <Text style={styles.code}>App.tsx</Text> and save to test Fast Refresh
        </Text>
      </View>

      <Text style={styles.footer}>
        Tap the logos to learn more
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
/*
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Pressable onPress={() => Linking.openURL('https://vite.dev')}>
          <Image source={require('./assets/viteLogo.png')} style={styles.logo} />
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://www.typescriptlang.org')}>
          <Image source={require('./assets/typescriptLogo.png')} style={styles.logo} />
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://sass-lang.com')}>
          <Image source={require('./assets/scssLogo.png')} style={styles.logo} />
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://react.dev')}>
          <Image source={require('./assets/reactLogo.png')} style={styles.logo} />
        </Pressable>
      </View>

    
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
  },
  logoRow: { 
    flexDirection: 'row', 
    gap: 12 
  },
  logo: { 
    width: 50, 
    height: 50, 
    margin: 4 
  },
  heading: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 20 
  },
  card: { 
    marginTop: 20, 
    padding: 16, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 8 
  },
  button: { 
    backgroundColor: '#61dafb', 
    padding: 10, 
    borderRadius: 4 
  },
  buttonText: { 
    color: '#000', 
    fontWeight: 'bold' 
  },
  note: { 
    marginTop: 8 
  },
  code: { 
    fontFamily: 'monospace', 
    backgroundColor: '#eee', 
    paddingHorizontal: 4 
  },
  footer: { 
    marginTop: 24, 
    fontStyle: 'italic' 
  },
});