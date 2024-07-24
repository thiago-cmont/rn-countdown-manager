import { useState } from 'react';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Countdown,
  useCountdown,
  ZERO_TO_FIFTY_NINE,
  ZERO_TO_NINETY_NINE,
} from 'react-native-countdown';

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
    hours: 11,
    seconds: 22,
    minutes: 33,
  });
  const [formHours, setFormHours] = useState<ZERO_TO_NINETY_NINE>();
  const [formMinutes, setFormMinutes] = useState<ZERO_TO_FIFTY_NINE>();
  const [formSeconds, setFormSeconds] = useState<ZERO_TO_FIFTY_NINE>();
  const [showHours, setShowHours] = useState(true);
  const [showMinutes, setShowMinutes] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>react-native-countdown</Text>
        <View>
          <View style={styles.countdownContainer}>
            <Text style={[styles.subTitle, styles.boldText]}>
              Countdown component
            </Text>
            <Countdown
              showHours={showHours}
              showMinutes={showMinutes}
              hours={hours}
              seconds={seconds}
              minutes={minutes}
              fillColor="#000000"
            />
            <View style={styles.row}>
              <View style={styles.switchContainer}>
                <Text style={[styles.text, styles.boldText]}>Show Hours</Text>
                <Switch
                  trackColor={{ true: '#b1b1b1b1', false: '#f1f1f1f1' }}
                  thumbColor={showHours ? '#000000' : '#b3b3b3b3'}
                  value={showHours}
                  onValueChange={() => setShowHours(!showHours)}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text style={[styles.text, styles.boldText]}>Show Minutes</Text>
                <Switch
                  trackColor={{ true: '#b1b1b1b1', false: '#f1f1f1f1' }}
                  thumbColor={showMinutes ? '#000000' : '#b3b3b3b3'}
                  value={showMinutes}
                  onValueChange={() => setShowMinutes(!showMinutes)}
                />
              </View>
            </View>
          </View>
          <View style={styles.useCountdownContainer}>
            <Text style={[styles.subTitle, styles.boldText]}>
              useCountdown hook return
            </Text>
            <View style={styles.textOnlyContainer}>
              <Text style={[styles.text, styles.boldText]}>formattedTime</Text>
              <Text style={styles.text}>{formattedTime}</Text>
            </View>
            <View style={styles.row}>
              <View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>Hours</Text>
                  <Text style={styles.text}>{hours}</Text>
                </View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>Minutes</Text>
                  <Text style={styles.text}>{minutes}</Text>
                </View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>Seconds</Text>
                  <Text style={styles.text}>{seconds}</Text>
                </View>
              </View>
              <View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>isRunning</Text>
                  <Text
                    style={[
                      styles.text,
                      isRunning ? styles.true : styles.false,
                    ]}
                  >
                    {String(isRunning)}
                  </Text>
                </View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>isPaused </Text>
                  <Text
                    style={[styles.text, isPaused ? styles.true : styles.false]}
                  >
                    {String(isPaused)}
                  </Text>
                </View>
                <View style={styles.textOnlyContainer}>
                  <Text style={[styles.text, styles.boldText]}>isFinished</Text>
                  <Text
                    style={[
                      styles.text,
                      isFinished ? styles.true : styles.false,
                    ]}
                  >
                    {String(isFinished)}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Pause" color="#000000" onPress={() => pause()} />
              <Button title="Resume" color="#000000" onPress={() => resume()} />
              <Button title="Start" color="#000000" onPress={() => start()} />
              <View style={styles.row}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Hours"
                  value={formHours ? String(formHours) : ''}
                  onChangeText={(text) =>
                    setFormHours(Number(text) as ZERO_TO_NINETY_NINE)
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Minutes"
                  value={formMinutes ? String(formMinutes) : ''}
                  onChangeText={(text) =>
                    setFormMinutes(Number(text) as ZERO_TO_FIFTY_NINE)
                  }
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Seconds"
                  value={formSeconds ? String(formSeconds) : ''}
                  onChangeText={(text) =>
                    setFormSeconds(Number(text) as ZERO_TO_FIFTY_NINE)
                  }
                />
              </View>

              <Button
                title="Reset"
                color="#000000"
                onPress={() =>
                  Alert.alert(
                    `Reset countdown with ${formHours ? String(formHours) : '0'} h : ${formMinutes ? String(formMinutes) : '0'} m : ${formSeconds ? String(formSeconds) : '0'} s?`,
                    '',
                    [
                      {
                        text: 'YES',
                        onPress: () =>
                          reset({
                            hours: formHours,
                            minutes: formMinutes,
                            seconds: formSeconds,
                          }),
                        style: 'default',
                      },
                      {
                        text: 'NO',
                        style: 'cancel',
                      },
                    ]
                  )
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    paddingTop: 50,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  countdownContainer: {
    gap: 10,
    marginTop: 40,
    alignItems: 'center',
  },
  useCountdownContainer: {
    marginTop: 40,
  },
  textOnlyContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    gap: 10,
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  text: {
    paddingVertical: 10,
    color: '#000000',
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  button: {
    borderRadius: 10,
    width: '40%',
  },
  textInput: {
    borderWidth: 1,
    color: '#000000',
    width: '30%',
    paddingLeft: 5,
    borderRadius: 5,
  },
  false: {
    color: 'red',
  },
  true: {
    color: 'green',
  },
});
