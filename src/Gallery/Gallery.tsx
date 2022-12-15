import React, { memo, useCallback, useMemo, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createZoomListComponent } from "react-native-reanimated-zoom";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DataProvider, LayoutProvider, RecyclerListView } from "recyclerlistview";

import { styles } from "./Gallery.styles";
import { GalleryProps } from "./Gallery.types";

import { ZoomableImage } from "../ZoomableImage";
import { APP_SCREEN_HEIGHT, APP_SCREEN_WIDTH } from "~/constants/";

const ZoomFlatList = createZoomListComponent(RecyclerListView);

const _layoutProvider = new LayoutProvider(
  index => {
    return index;
  },
  (type, dim) => {
    dim.width = APP_SCREEN_WIDTH;
    dim.height = APP_SCREEN_HEIGHT;
  },
);

const dataProvider = new DataProvider((r1, r2) => {
  return r1.id !== r2.id;
});

const Gallery = (props: GalleryProps) => {
  const { images, handleCloseGallery, rightComponent, leftComponent, bottomBarContent } =
    props;

  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);

  const {
    flex,
    barContainer,
    barContainerBottom,
    barContentContainerBottom,
    barContentContainerTop,
    closeButtonContainer,
    currentImageNumberChip,
    dividerStyle,
    fullSize,
    width10percent,
    galleryBackground,
  } = useMemo(() => styles(insets), [insets]);

  const renderTopBar = useMemo(
    () => (
      <View style={barContainer}>
        <View style={barContentContainerTop}>
          <TouchableOpacity onPress={handleCloseGallery}>
            {leftComponent ? (
              leftComponent
            ) : (
              <View style={closeButtonContainer}>
                <Text>Close</Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={currentImageNumberChip}>
            <Text>
              {index + 1}
            </Text>
            <Text style={dividerStyle}>
              /
            </Text>
            <Text>
              {images.length}
            </Text>
          </View>
          {rightComponent ? rightComponent : <View style={width10percent} />}
        </View>
      </View>
    ),
    [
      rightComponent,
      barContainer,
      barContentContainerTop,
      leftComponent,
      closeButtonContainer,
      currentImageNumberChip,
      dividerStyle,
      handleCloseGallery,
      images.length,
      index,
      width10percent,
    ],
  );

  const renderBottomBar = useMemo(() => {
    return (
      <View style={barContainerBottom}>
        <View style={barContentContainerBottom}>
          {!!bottomBarContent && bottomBarContent}
        </View>
      </View>
    );
  }, [barContainerBottom, barContentContainerBottom, bottomBarContent]);

  const renderItem = useCallback(
    (type: string | number, data: { uri: string }) => {
      return <ZoomableImage uri={data?.uri} style={fullSize} />;
    },
    [fullSize],
  );

  const handleSetNewIndex = useCallback(
    (visibleIndexes: number[]) => {
      const newIndex = visibleIndexes[visibleIndexes.length - 1];
      if (index !== newIndex) {
        setIndex(newIndex);
      }
    },
    [index],
  );

  return (
    <View style={galleryBackground}>
      {renderTopBar}
      <View style={fullSize}>
        <GestureHandlerRootView style={flex}>
          <ZoomFlatList
            pagingEnabled
            onVisibleIndicesChanged={handleSetNewIndex}
            isHorizontal
            layoutProvider={_layoutProvider}
            dataProvider={dataProvider.cloneWithRows(images)}
            rowRenderer={renderItem}
            layoutSize={fullSize}
          />
        </GestureHandlerRootView>
      </View>
      {renderBottomBar}
    </View>
  );
};

export default memo(Gallery);
