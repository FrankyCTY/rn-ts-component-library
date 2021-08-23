# @soltalabs/somePackage

> A utility-first styling framework for React Native with zero runtime dependencies.
> Inspired by [Tailwind CSS](https://tailwindcss.com/).

## `SVG Icon`

> We have to main ways to use SVG icons

- react-native-vector-icons package
- custom svg file

## react-native-vector-icons package

## Installation

```bash
yarn add react-native-vector-icons
```

## Android configuration

> source: https://github.com/oblador/react-native-vector-icons#android

```diff
// android/app/build.gradle
+ apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Usage

```typescript
import React from 'react';
import {TouchableHighlight} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
  children: Element;
}

export const CustomButton = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <FontAwesomeIcon name="deafness" size={50} />
    </TouchableHighlight>
  );
};
```

## custom svg file

To make custom svg file, we need to configure the **Javascript bundler - Metro** to compile svg, to make that work we need two packages installed.

- react-native-svg
- react-native-svg-transformer

## Installation

```bash
yarn add react-native-svg react-native-svg-transformer
```

## Metro Configuration

> source: https://github.com/kristerkari/react-native-svg-transformer#for-react-native-v057-or-newer--expo-sdk-v3100-or-newer

```javascript
// metro.config.js
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      experimentalImportSupport: false,
      inlineRequires: true,
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

## Usage

```typescript
// Example: CustomButton.tsx
import React from 'react';
import {TouchableHighlight} from 'react-native';
import Svg, {Path, Line, Polyline} from 'react-native-svg';

interface Props {
  onPress: () => void;
  children: Element;
}

export const CustomButton = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <FontAwesome name="deafness" size={50} />
      <Svg
        height="100"
        width="100"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="pink"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <Line x1="7" y1="7" x2="17" y2="17" />
        <Polyline points="17 8 17 17 8 17" />
      </Svg>
    </TouchableHighlight>
  );
};
```
