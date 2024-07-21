import { Text, View } from 'react-native';
import { Countdown, useCountdown } from 'react-native-countdown';

const App = () => {
  const {
    isRunning,
    isPaused,
    pause,
    reset,
    resume,
    start,
    formattedTime,
    isFinished,
    seconds,
    hours,
    minutes,
  } = useCountdown({
    autoStart: false,
    seconds: 22,
    minutes: 45,
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Countdown
        hours={hours}
        seconds={seconds}
        minutes={minutes}
        fillColor="orange"
        color="yellow"
      />
      <Text>{formattedTime}</Text>
      <Text style={{ paddingVertical: 10 }}>isRunning {String(isRunning)}</Text>
      <Text style={{ paddingVertical: 10 }}> isPaused {String(isPaused)}</Text>
      <Text style={{ paddingVertical: 10 }}>
        isFinished {String(isFinished)}
      </Text>
      <Text style={{ paddingVertical: 10 }} onPress={() => pause()}>
        Pause
      </Text>
      <Text style={{ paddingVertical: 10 }} onPress={() => resume()}>
        Resume
      </Text>
      <Text
        style={{ paddingVertical: 10 }}
        onPress={() => reset({ seconds: 5 })}
      >
        Reset
      </Text>
      <Text style={{ paddingVertical: 10 }} onPress={() => start()}>
        Start
      </Text>
    </View>
  );
};

export default App;
