import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("@/assets/images/manonfire.png");

export default function Index() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  
  const pickImage = async () => {
    const permission = await ImagePicker.getMediaLibraryPermissionsAsync()
    if (!permission.granted) {
      Alert.alert('feck off', "you'd best feck off you feckin cunt")
      return;
    }
   // get the image
    let imgResult = await ImagePicker.launchImageLibraryAsync(
      {allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: ['images'],
      exif: true}
    )

    if(!imgResult.canceled) {
      setImage(imgResult.assets[0].uri);
      setShowAppOptions(true);
    } else {
      return;
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          height={440}
          width={320}
          borderRadius={18}
          image={image}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View> 
      ) : ( 
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" press={pickImage}></Button>
        <Button label="Use this, ya bitch..." press={() => setShowAppOptions(true)}></Button>
      </View>)}
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
    flex: 3,
    // this is now a fraction of the total flex numbers in the container
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});
