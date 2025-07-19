import { Text, StyleSheet, View } from "react-native";
import {Image} from "expo-image"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Athi Test.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: { color: "blue"},
});