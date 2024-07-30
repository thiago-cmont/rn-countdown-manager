import { render } from '@testing-library/react-native';
import { Countdown } from '../components';
import { CountdownProps } from '../components/stopwatch';
import { getBlocksTestIdAndAmountFromNumber } from './helper/countdownComponentTestHelper';
import { Text } from 'react-native';

//Functions
const renderCountdown = (props: CountdownProps) => {
  return render(<Countdown {...props} />);
};

//Mocks
jest.useFakeTimers();

describe('Countdown component', () => {
  it('Should render component with right props', () => {
    const { getByTestId } = renderCountdown({
      hours: 2,
      minutes: 22,
      seconds: 22,
    });

    const countdown = getByTestId('countdown-component');

    expect(countdown).toBeTruthy();
  });

  it('should render right hour, minutes and second blocks', () => {
    const { queryAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
    });

    const blocksTestIDs = getBlocksTestIdAndAmountFromNumber({
      hours: 12,
      minutes: 30,
      seconds: 10,
    });

    blocksTestIDs.forEach((amount, testID) => {
      const blocksAmount = queryAllByTestId(testID).length;
      expect(blocksAmount).toBe(amount);
    });
  });

  it('should not render hours if showHours is false', () => {
    const { getAllByTestId, queryByTestId, getByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      showHours: false,
    });

    const frames = getAllByTestId('frame-countdown-component').length;

    const separatorHour_Minute = queryByTestId(
      'separator-hh/mm-countdown-component'
    );
    const separatorMinute_Second = getByTestId(
      'separator-mm/ss-countdown-component'
    );

    expect(frames).toBe(4);
    expect(separatorHour_Minute).toBeFalsy();
    expect(separatorMinute_Second).toBeTruthy();
  });

  it('should not render minutes if showMinutes is false', () => {
    const { getAllByTestId, queryByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      showHours: false,
      showMinutes: false,
    });

    const frames = getAllByTestId('frame-countdown-component').length;

    const separatorHour_Minute = queryByTestId(
      'separator-hh/mm-countdown-component'
    );
    const separatorMinute_Second = queryByTestId(
      'separator-mm/ss-countdown-component'
    );

    expect(separatorHour_Minute).toBeFalsy();
    expect(separatorMinute_Second).toBeFalsy();
    expect(frames).toBe(2);
  });

  it('should  render custom separator', () => {
    const { getAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      separator: <Text testID="custom-separator">Custom separator</Text>,
    });

    const frames = getAllByTestId('custom-separator').length;

    expect(frames).toBe(2);
  });
});
