import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  height: number;
  width: number;
  borderRadius: number;
  image?: string;
};

export default function ImageViewer({image, imgSource, height, width, borderRadius}: Props) {
  const imageSource = image ? {uri: image} : imgSource;
  return (
    <Image
      source={imageSource}
      style={{
        height: height,
        width: width,
        borderRadius: borderRadius,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
