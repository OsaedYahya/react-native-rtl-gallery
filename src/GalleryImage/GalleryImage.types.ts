import { ImageProps } from "react-native";

import { GalleryExtraProps, GalleryImage } from "../Gallery/Gallery.types";

export type GalleryImageProps = {
  images: GalleryImage[];
  imageProps?: ImageProps;
  galleryProps?: GalleryExtraProps;
  onGalleryClosedCb: () => void;
};
