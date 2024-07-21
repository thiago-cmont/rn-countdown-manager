import { type TimeProps } from '../../timer/hooks/types';
import { Text, View } from 'react-native';
import { Frame } from './frame';
import { formatToTimeString } from '../../timer/helpers';
import { type CustomStyle, type Sizes } from './types';
import { DEFAULT_FILL_COLLOR } from './blocks';

type Props = {
  showHours?: boolean;
  showMinutes?: boolean;
  separator?: React.ReactNode;
  size?: Sizes;
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
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        height: 500,
        borderWidth: 1,
      }}
    >
      {showHours && (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Frame
            number={Number(formatToTimeString(hours).slice(0, 1))}
            size={size}
            fillColor={fillColor}
            color={color}
          />
          <Frame
            number={Number(formatToTimeString(hours).slice(1))}
            size={size}
            fillColor={fillColor}
            color={color}
          />
        </View>
      )}
      {showHours && (
        <>
          {separator ? (
            { separator }
          ) : (
            <Text
              style={{
                color: fillColor ? fillColor : DEFAULT_FILL_COLLOR,
                fontSize: 50,
              }}
            >
              :
            </Text>
          )}
        </>
      )}
      {showMinutes && (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Frame
            number={Number(formatToTimeString(minutes).slice(0, 1))}
            size={size}
            fillColor={fillColor}
            color={color}
          />
          <Frame
            number={Number(formatToTimeString(minutes).slice(1))}
            size={size}
            fillColor={fillColor}
            color={color}
          />
        </View>
      )}
      {showMinutes && (
        <>
          {separator ? (
            { separator }
          ) : (
            <Text
              style={{
                color: fillColor ? fillColor : DEFAULT_FILL_COLLOR,
                fontSize: 50,
              }}
            >
              :
            </Text>
          )}
        </>
      )}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Frame
          number={Number(formatToTimeString(seconds).slice(0, 1))}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <Frame
          number={Number(formatToTimeString(seconds).slice(1))}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
    </View>
  );
};

export default Countdown;
