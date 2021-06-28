import * as React from "react";
import { View, Text, Button } from "react-native";
export default function IntroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Intro Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate("form")} />
    </View>
  );
}
