import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { DEFAULT_COLOR } from './block';

type Props = {
  CustomSeparator?: React.FC;
  hidden?: boolean;
  color?: string;
};
export const Separator = ({ CustomSeparator, hidden, color }: Props) => {
  if (hidden) {
    return <></>;
  }
  if (CustomSeparator) {
    return <CustomSeparator />;
  }
  return (
    <Text
      testID="separator-countdown-component"
      style={[
        {
          color: color ? color : DEFAULT_COLOR,
        },
        style.separator,
      ]}
    >
      :
    </Text>
  );
};

const style = StyleSheet.create({
  separator: {
    fontSize: 50,
    paddingHorizontal: 10,
    verticalAlign: 'middle',
  },
});
