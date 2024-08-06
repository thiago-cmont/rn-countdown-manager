import { render } from '@testing-library/react-native';
import { Countdown } from '../components';
import { CountdownProps } from '../components/stopwatch';
import { getBlocksTestIdAndAmountFromNumber } from '../helper';
import { Text } from 'react-native';

//Functions
const renderCountdown = (props: CountdownProps) => {
  return render(<Countdown {...props} />);
};

//Mocks
jest.useFakeTimers();
const customBlocksMock = {
  a: { asset: () => <></> },
  b: { asset: () => <></> },
  c: { asset: () => <></> },
  d: { asset: () => <></> },
  e: { asset: () => <></> },
  f: { asset: () => <></> },
  g: { asset: () => <></> },
};

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
    const { getAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      showHours: false,
    });

    const frames = getAllByTestId('frame-countdown-component').length;
    const separators = getAllByTestId('separator-countdown-component').length;

    expect(frames).toBe(4);
    expect(separators).toBe(1);
  });

  it('should not render minutes if showMinutes is false', () => {
    const { getAllByTestId, queryAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      showHours: false,
      showMinutes: false,
    });

    const frames = getAllByTestId('frame-countdown-component').length;
    const separators = queryAllByTestId('separator-countdown-component').length;

    expect(separators).toBe(0);
    expect(frames).toBe(2);
  });

  it('should  render custom separator', () => {
    const { getAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      CustomSeparator: () => (
        <Text testID="custom-separator">Custom separator</Text>
      ),
    });

    const frames = getAllByTestId('custom-separator').length;

    expect(frames).toBe(2);
  });

  it('should  render custom block assets', () => {
    const { getAllByTestId } = renderCountdown({
      hours: 12,
      minutes: 30,
      seconds: 10,
      customBlocks: customBlocksMock,
    });

    const frames = getAllByTestId(
      'frame-with-custom-blocks-countdown-component'
    ).length;

    expect(frames).toBe(6);
  });
});
