
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: 10,
      color: '#000',
      marginTop:10
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
    cont: {
        flexDirection: 'row',       
        justifyContent: 'center',   
        alignItems: 'center',       
      },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#E0E0E0', 
        marginHorizontal: 5,
    
      },
      activeDot: {
        backgroundColor: '#6A4AC9',
      },
  });