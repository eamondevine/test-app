import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  height: number;
  width: number;
  borderRadius: number;
};

export default function ImageViewer(props: Props) {
  return (
    <Image
      source={props.imgSource}
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
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
