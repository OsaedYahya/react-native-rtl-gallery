import React, { memo, useMemo, useState } from "react";
import { View, TouchableOpacity, Modal, Image } from "react-native";

import { styles } from "./GalleryImage.styles";
import { GalleryImageProps } from "./GalleryImage.types";

import { Gallery } from "./../Gallery";

const GalleryImage = (props: GalleryImageProps) => {
  const {
    images = [],
    imageProps = {},
    galleryProps = {},
    onGalleryClosedCb = () => undefined,
  } = props;

  const imageUri = useMemo(
    () => imageProps?.source || { uri: images[0]?.uri },
    [imageProps?.source, images],
  );

  const { defaultImageStyle } = styles;

  const [isVisible, setIsVisible] = useState(false);

  const handleShowGallery = () => {
    setIsVisible(true);
  };

  const handleHideGallery = () => {
    onGalleryClosedCb();
    setIsVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleShowGallery}>
        <Image style={defaultImageStyle} source={imageUri} {...imageProps} />
      </TouchableOpacity>
      <Modal visible={isVisible}>
        <Gallery
          images={images}
          handleCloseGallery={handleHideGallery}
          {...galleryProps}
        />
      </Modal>
    </View>
  );
};

export default memo(GalleryImage);
