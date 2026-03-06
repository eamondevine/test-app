import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TestTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        aliquam est mauris, et ultricies massa blandit et. Nunc nisl ligula,
        dapibus id leo facilisis, ultrices finibus neque. Vivamus vitae lacinia
        libero, vel ultrices sapien. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Proin nibh nunc, tempus vitae tempus eu, suscipit at
        ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        feugiat ligula vitae arcu auctor commodo. Ut eu tellus vel mauris
        dignissim hendrerit. Praesent malesuada, nisi vitae malesuada venenatis,
        lectus sapien efficitur turpis, ut commodo est felis et est. Sed nec
        lacus quis magna mattis vehicula at eu diam. Maecenas pellentesque
        facilisis dui quis tristique. Donec sit amet faucibus dui. In fermentum
        nisi eget lacus facilisis, in tincidunt nisl venenatis. Duis elementum
        nisl eleifend ornare faucibus. Also, titties.
      </Text>
      <Link href="/(tabs)" style={styles.button}>
        <Text>Go to Home screen {"\n"}ya fookin wankuh</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
