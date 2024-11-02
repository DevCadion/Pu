import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router'; 
import { styles } from './sytles';

export default function Home() {
  return (
    
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={styles.card}>
      

        <View style={styles.cont}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Veja como está o tempo ao redor do mundo 🌍</Text>
        <Text style={styles.subtitle}>Comece agora gratuitamente</Text>

  
        <Link href="/up" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vamos lá</Text>
          </TouchableOpacity>
        </Link>

        
        <Text style={styles.loginText}>
          Já tem uma conta?{' '}
          <Link href="/up" style={styles.loginLink}>Log in</Link>
        </Text>
      </View>
    </View>
  );
}

