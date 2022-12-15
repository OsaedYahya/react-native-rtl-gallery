# react-native-calendar-date-range-picker
React native calendar range picker
[![Version](https://img.shields.io/npm/v/react-native-calendar-date-range-picker.svg)](https://www.npmjs.com/package/react-native-calendars)

### Preview

<img src="https://user-images.githubusercontent.com/69788216/207879582-128d1c39-a8ce-48b9-b668-53904718acb3.gif" width="20%" height="20%">

## Getting Started

### Installation

npm
```bash
npm i react-native-rtl-gallery
````
Yarn
```
yarn add react-native-rtl-gallery
```

### Props


| Property | Required | Type | Default | Description |
|-------------|----|----------|-------|--------------------------------------------------------------|
| imageProps | No | ImageProps | Default image props for the outer image |
| galleryProps | No | GalleryExtraProps | Props to be passed to Gallery |
| images | Yes | GalleryImage[] | [] | Array of images in Gallery |
| onGalleryClosedCb | No | Function | () => undefined | Function that's triggered on gallery close |

GalleryExtraProps
| Property | Required | Type | Default | Description |
|-------------|----|----------|-------|--------------------------------------------------------------|
| rightComponent | No | ReactNode | undefined | Create right header component on gallery |
| leftComponent | No | ReactNode | undefined | Replace back component on gallery |
| bottomBarContent | No | ReactNode | undefined | Add bottom component to gallery |


## Types

```
GalleryImage {
  id: string;
  uri: string;
};
```

