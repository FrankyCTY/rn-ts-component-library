import React from 'react';
import {TouchableHighlight, View} from 'react-native';
// import Svg, {Path, Line, Polyline} from 'react-native-svg';

interface Props {
  onPress: () => void;
  children: Element;
}

export const CustomButton = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      {/* <Svg
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
      </Svg> */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-down-right"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="7" y1="7" x2="17" y2="17"></line>
        <polyline points="17 8 17 17 8 17"></polyline>
      </svg> */}
    </TouchableHighlight>
  );
};
