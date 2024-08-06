import { StyleSheet, View } from 'react-native';
import { CustomBlocksType, Sizes } from './types';
import { Frame, FrameWithcustomBlocks } from './frame';
import { formatToTimeString } from '../../timer/helpers';

type Props = {
  hidden?: boolean;
  size?: Sizes;
  offColor?: string;
  color?: string;
  customBlocks?: CustomBlocksType;
  time?: number;
};
export const TimeBlock = ({
  hidden,
  time,
  color,
  offColor,
  size,
  customBlocks,
}: Props) => {
  if (hidden) {
    return <></>;
  }

  return (
    <View style={style.container}>
      {customBlocks ? (
        <>
          <FrameWithcustomBlocks
            number={Number(formatToTimeString(time).slice(0, 1))}
            customBlocks={customBlocks}
          />
          <FrameWithcustomBlocks
            number={Number(formatToTimeString(time).slice(1))}
            customBlocks={customBlocks}
          />
        </>
      ) : (
        <>
          <Frame
            number={Number(formatToTimeString(time).slice(0, 1))}
            size={size}
            offColor={offColor}
            color={color}
          />
          <Frame
            number={Number(formatToTimeString(time).slice(1))}
            size={size}
            offColor={offColor}
            color={color}
          />
        </>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
});
