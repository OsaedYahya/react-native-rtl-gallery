import { StyleSheet } from "react-native";

import { EdgeInsets } from "react-native-safe-area-context";

import { APP_SCREEN_HEIGHT, APP_SCREEN_WIDTH } from "~/constants/";

export const styles = (insets: EdgeInsets) =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    galleryBackground: {
      backgroundColor: "#323232",
      flex: 1,
    },
    closeButtonContainer: {
      padding: 10,
      backgroundColor: "rgba(225,225,225,0.2)",
      borderRadius: 10,
    },
    fullSize: {
      width: APP_SCREEN_WIDTH,
      height: APP_SCREEN_HEIGHT,
    },
    barContainer: {
      zIndex: 20,
      width: "100%",
      position: "absolute",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    barContainerBottom: {
      zIndex: 20,
      width: "100%",
      position: "absolute",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.2)",
      bottom: 0,
    },
    barContentContainer: {
      flexDirection: "row",
      paddingHorizontal: 16,
      justifyContent: "space-between",
      alignItems: "center",
    },
    currentImageNumberChip: {
      paddingHorizontal: 16,
      borderRadius: 40,
      backgroundColor: "rgba(0,0,0,0.5)",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 5,
      justifyContent: "center",
    },
    width10percent: {
      width: "10%",
    },
    dividerStyle: {
      marginHorizontal: 6,
    },
    barContentContainerTop: {
      flexDirection: "row",
      paddingHorizontal: 16,
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: insets?.top + 8,
      paddingBottom: 10,
    },
    barContentContainerBottom: {
      flexDirection: "row",
      paddingHorizontal: 16,
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: insets?.bottom + 8,
    },
  });
