import { renderHook, waitFor } from '@testing-library/react-native';
import { useCountdown } from '../timer';

//MOCKS
jest.useFakeTimers();
const onComplete = jest.fn();

describe('useCountdown hook tests', () => {
  it('hook must be mounted with right props and start if start is called', async () => {
    const { result } = renderHook(() =>
      useCountdown({ autoStart: false, hours: 0, minutes: 0, seconds: 5 })
    );

    waitFor(() => {
      expect(result.current.isFinished).toBeFalsy();
      expect(result.current.isPaused).toBeFalsy();
      expect(result.current.isRunning).toBeFalsy();
      expect(result.current.seconds).toBe(5);
    });

    result.current.start();

    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(result.current.isFinished).toBeTruthy();
      expect(result.current.isPaused).toBeFalsy();
      expect(result.current.isRunning).toBeFalsy();
      expect(result.current.seconds).toBe(0);
    });
  });

  it('isPaused should be true and isRunning false if pause is called', async () => {
    const { result } = renderHook(() =>
      useCountdown({ autoStart: true, hours: 0, minutes: 0, seconds: 10 })
    );

    result.current.pause();

    await waitFor(() => {
      expect(result.current.isFinished).toBeFalsy();
      expect(result.current.isPaused).toBeTruthy();
      expect(result.current.isRunning).toBeFalsy();
    });
  });

  it('isPaused should be false and isRunning true if pause is called and resume is called after', async () => {
    const { result } = renderHook(() =>
      useCountdown({ autoStart: true, hours: 0, minutes: 0, seconds: 10 })
    );

    result.current.pause();
    result.current.resume();

    await waitFor(() => {
      expect(result.current.isFinished).toBeFalsy();
      expect(result.current.isPaused).toBeFalsy();
      expect(result.current.isRunning).toBeTruthy();
    });
  });

  it('onComplete should be called after countdown finishes', async () => {
    const { result } = renderHook(() =>
      useCountdown({
        autoStart: true,
        hours: 0,
        minutes: 0,
        seconds: 5,
        onComplete,
      })
    );

    // onComplete will run on the next tick of uesInterval
    jest.advanceTimersByTime(6000);

    await waitFor(() => {
      expect(result.current.isFinished).toBeTruthy();
      expect(result.current.isPaused).toBeFalsy();
      expect(result.current.isRunning).toBeFalsy();
      expect(onComplete).toBeCalled();
    });
  });

  it('should return right hour, minute, second and formattedTime', async () => {
    const { result } = renderHook(() =>
      useCountdown({
        autoStart: true,
        hours: 2,
        minutes: 30,
        seconds: 15,
      })
    );

    // skip 1 hour, 10 minutes and 5 seconds
    jest.advanceTimersByTime(4205000);

    await waitFor(() => {
      expect(result.current.hours).toBe(1);
      expect(result.current.minutes).toBe(20);
      expect(result.current.seconds).toBe(10);
      expect(result.current.formattedTime).toBe('01 : 20 : 10');
    });
  });

  it('should reset with right props when reset is called', async () => {
    const { result } = renderHook(() =>
      useCountdown({
        autoStart: true,
        hours: 0,
        minutes: 0,
        seconds: 20,
        onComplete,
      })
    );

    result.current.reset({ minutes: 20, seconds: 15 });

    jest.advanceTimersByTime(10000);

    result.current.pause();

    await waitFor(() => {
      expect(result.current.isFinished).toBeFalsy();
      expect(result.current.isPaused).toBeTruthy();
      expect(result.current.isRunning).toBeFalsy();
      expect(result.current.hours).toBe(0);
      expect(result.current.minutes).toBe(20);
      expect(result.current.seconds).toBe(5);
      expect(result.current.formattedTime).toBe('00 : 20 : 05');
      expect(onComplete).toBeCalled();
    });
  });
});
