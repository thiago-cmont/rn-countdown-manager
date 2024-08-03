import { type TimeProps } from '../../timer/hooks/types';
import { StyleSheet, Text, View } from 'react-native';
import { Frame, FrameCustom } from './frame';
import { formatToTimeString } from '../../timer/helpers';
import { CustomFrameAssets, type CustomStyle, type Sizes } from './types';
import { DEFAULT_FILL_COLLOR } from './blocks';
import { getCustomBlockAssetsFromFrameAssets } from './helpers/getCustomAssets';

export type CountdownProps = {
  showHours?: boolean;
  showMinutes?: boolean;
  separator?: JSX.Element;
  size?: Sizes;
  customAssets?: CustomFrameAssets;
} & TimeProps &
  CustomStyle;

const Countdown = ({
  hours,
  minutes,
  seconds,
  showHours = true,
  showMinutes = true,
  fillColor,
  color,
  separator,
  size,
  customAssets,
}: CountdownProps) => {
  if (customAssets) {
    console.log(getCustomBlockAssetsFromFrameAssets('a', customAssets));
  }
  return (
    <View style={style.countdownContainer} testID="countdown-component">
      {showHours && (
        <View style={style.frameContainer}>
          <Frame
            number={Number(formatToTimeString(hours).slice(0, 1))}
            size={size}
            fillColor={fillColor}
            color={color}
            customAssets={customAssets}
          />
          <Frame
            number={Number(formatToTimeString(hours).slice(1))}
            size={size}
            fillColor={fillColor}
            color={color}
            customAssets={customAssets}
          />
        </View>
      )}
      {showHours && (
        <>
          {separator ? (
            separator
          ) : (
            <Text
              testID="separator-hh/mm-countdown-component"
              style={[
                {
                  color: fillColor ? fillColor : DEFAULT_FILL_COLLOR,
                },
                style.separator,
              ]}
            >
              :
            </Text>
          )}
        </>
      )}
      {showMinutes && (
        <View style={style.frameContainer}>
          <Frame
            number={Number(formatToTimeString(minutes).slice(0, 1))}
            size={size}
            fillColor={fillColor}
            color={color}
            customAssets={customAssets}
          />
          <Frame
            number={Number(formatToTimeString(minutes).slice(1))}
            size={size}
            fillColor={fillColor}
            color={color}
            customAssets={customAssets}
          />
        </View>
      )}
      {showMinutes && (
        <>
          {separator ? (
            separator
          ) : (
            <Text
              testID="separator-mm/ss-countdown-component"
              style={[
                {
                  color: fillColor ? fillColor : DEFAULT_FILL_COLLOR,
                },
                style.separator,
              ]}
            >
              :
            </Text>
          )}
        </>
      )}
      <View style={style.frameContainer}>
        <FrameCustom
          number={Number(formatToTimeString(seconds).slice(0, 1))}
          size={size}
          fillColor={fillColor}
          color={color}
          customAssets={customAssets!!}
        />
        <FrameCustom
          number={Number(formatToTimeString(seconds).slice(1))}
          size={size}
          fillColor={fillColor}
          color={color}
          customAssets={customAssets!!}
        />
      </View>
    </View>
  );
};

export default Countdown;

const style = StyleSheet.create({
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  frameContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  separator: {
    fontSize: 50,
  },
});
