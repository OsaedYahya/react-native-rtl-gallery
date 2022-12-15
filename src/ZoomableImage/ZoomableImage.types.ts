import { ImageProps, ImageStyle } from "react-native";

interface ImageViewInterface extends ImageProps {
  uri: string;
  style: ImageStyle;
}
export type ImageViewProps = ImageViewInterface;
