import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("@/assets/images/manonfire.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          height={440}
          width={320}
          borderRadius={18}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo"></Button>
        <Button label="Ya bitch..."></Button>
      </View>
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
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
