// src/app/up.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

// Definições de tipos
interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentWeather {
  last_updated: string;
  temp_c: number;
  condition: Condition;
  wind_mph: number;
  pressure_mb: number;
  humidity: number;
}

interface WeatherApiResponse {
  location: Location;
  current: CurrentWeather;
}

export default function Up() {
  const [city, setCity] = useState<string>(''); // Estado para armazenar a cidade
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null); // Estado para armazenar os dados do clima
  const [predefinedCities, setPredefinedCities] = useState<WeatherApiResponse[]>([]); // Estado para armazenar dados das cidades predefinidas

  const fetchWeatherData = async (city: string) => {
    try {
      const response = await axios.get<WeatherApiResponse>(
        `http://api.weatherapi.com/v1/current.json?key=4e1cb1f57bb842d5b0b123527242809&q=${city}&aqi=no`
      );
      return response.data; // Retorna os dados recebidos
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const handleSearch = async () => {
    if (city) {
      const data = await fetchWeatherData(city);
      setWeatherData(data); // Armazena os dados recebidos
    }
  };

  // Effect para buscar clima das cidades predefinidas
  useEffect(() => {
    const fetchPredefinedCitiesWeather = async () => {
      const cities = ['São Paulo', 'Rio de Janeiro', 'Porto Alegre'];
      const results = await Promise.all(cities.map(fetchWeatherData));
      setPredefinedCities(results.filter(result => result !== null) as WeatherApiResponse[]); // Filtra resultados válidos
    };
    fetchPredefinedCitiesWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá User,</Text>
          <Text style={styles.subtitle}>Descubra o clima</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="globe-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Pesquise por uma cidade"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Ao redor do mundo</Text>

      <ScrollView style={styles.citiesList}>
        {weatherData && (
          <View style={styles.cityCard}>
            <Text style={styles.countryText}>{weatherData.location.country}</Text>
            <Text style={styles.cityText}>{weatherData.location.name}</Text>
            <Text style={styles.weatherText}>{weatherData.current.condition.text}</Text>
            <Text style={styles.tempText}>{`${weatherData.current.temp_c}°C`}</Text>
          </View>
        )}

        {/* Exibindo dados das cidades predefinidas */}
        {predefinedCities.map((data, index) => (
          <View key={index} style={styles.cityCard}>
            <Text style={styles.countryText}>{data.location.country}</Text>
            <Text style={styles.cityText}>{data.location.name}</Text>
            <Text style={styles.weatherText}>{data.current.condition.text}</Text>
            <Text style={styles.tempText}>{`${data.current.temp_c}°C`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingTop: 50,
    marginTop:20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  iconButton: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 30,
  },
  input: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchButton: {
    height:50,
    width:300,
    marginLeft:22, 
    backgroundColor: '#8A2BE2',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    //width:100,
    alignItems: 'center',
    marginBottom: 30,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  citiesList: {
    flex: 1,
  },
  cityCard: {
    backgroundColor: '#8A2BE2',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'column',
    position: 'relative',
  },
  countryText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  cityText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  tempText: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#fff',
    fontSize: 16,
  },
});
