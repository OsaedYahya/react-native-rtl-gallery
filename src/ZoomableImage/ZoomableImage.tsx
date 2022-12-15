import React from "react";
import { useState, useMemo, useCallback } from "react";
import { Image, ActivityIndicator, View } from "react-native";

import { Zoom } from "react-native-reanimated-zoom";

import styles from "./ZoomableImage.styles";
import { ImageViewProps } from "./ZoomableImage.types";

export const ZoomableImage = (props: ImageViewProps) => {
  const { uri, style } = props;
  const [isLoading, setIsLoading] = useState(true);

  const { containerStyle } = styles;
  const renderLoader = useMemo(() => {
    if (isLoading) {
      return (
        <View style={containerStyle}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return null;
  }, [containerStyle, isLoading]);

  const handleOnLoadEnd = useCallback(() => setIsLoading(false), []);
  const imageUri = useMemo(
    () => ({
      uri,
    }),
    [uri],
  );

  return (
    <Zoom>
      {renderLoader}
      <Image
        source={imageUri}
        style={style}
        resizeMode="contain"
        onLoadEnd={handleOnLoadEnd}
      />
    </Zoom>
  );
};
