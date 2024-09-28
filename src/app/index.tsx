import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Importação correta do Link

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Veja como está o tempo ao redor do mundo 🌍</Text>
        <Text style={styles.subtitle}>Comece agora gratuitamente</Text>

        {/* Botão "Vamos lá" com Link para a página Up */}
        <Link href="/up" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vamos lá</Text>
          </TouchableOpacity>
        </Link>

        {/* Link "Log in" como exemplo */}
        <Text style={styles.loginText}>
          Já tem uma conta?{' '}
          <Link href="/up" style={styles.loginLink}>Log in</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A2D97',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
  },
  loginLink: {
    color: '#8A2BE2',
    fontWeight: 'bold',
  },
});