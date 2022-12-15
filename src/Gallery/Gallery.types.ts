import { ReactNode } from "react";
export type GalleryImage = {
  uri: string;
  name?: string;
  description?: string;
};

export type GalleryExtraProps = {
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  bottomBarContent?: ReactNode;
};

export type GalleryProps = {
  images: GalleryImage[];
  handleCloseGallery: () => void;
} & GalleryExtraProps;
