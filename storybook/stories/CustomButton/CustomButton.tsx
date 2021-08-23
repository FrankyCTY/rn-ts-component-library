import React from 'react';
import {TouchableHighlight} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UilReact from '@iconscout/react-native-unicons/icons/uil-react';
// import Svg, {Path, Line, Polyline} from 'react-native-svg';

interface Props {
  onPress: () => void;
  children: Element;
}

export const CustomButton = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      {/* <FontAwesome name="deafness" size={50} /> */}
      <UilReact size="40" color="#61DAFB" />
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
    </TouchableHighlight>
  );
};
