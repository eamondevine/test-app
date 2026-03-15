import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


type Props = {
  label: string;
  theme?: 'primary';
  press?: () => void;
};

export default function Button({ label, theme, press }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, {borderColor: '#ffd300', borderRadius: 18, borderWidth: 3}]}>
        <Pressable onPress={press} style={[styles.button, {backgroundColor: '#fff'}]}>
          <FontAwesome name="photo" size={18} color="#25292e" style={{paddingRight: 12}}/>
          <Text style={{fontSize: 16, color: '#222e3d', fontWeight: '500'}}>{label}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={press}
        onLongPress={() => alert("Fuckin quit it")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 64,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 14,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
