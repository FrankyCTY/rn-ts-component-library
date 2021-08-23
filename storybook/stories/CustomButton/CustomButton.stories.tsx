import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {CenterView} from '../CenterView';
import React from 'react';
import {CustomButton} from './CustomButton';

storiesOf('Buttons/CustomButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CustomButton onPress={() => console.log('You Pressed On Me')}>
      <Text>Hello what are you doing</Text>
    </CustomButton>
  ));
