import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
     
      <Stack.Screen name="index" options={{headerShown: false, headerBackVisible:false}}/>
      <Stack.Screen name="up" options={{headerShown: false, headerBackVisible:false}}/>
     

    </Stack>
  );
}
