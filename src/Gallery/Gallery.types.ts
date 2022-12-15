import { ReactNode } from "react";
export type GalleryImage = {
  id: string;
  uri: string;
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
