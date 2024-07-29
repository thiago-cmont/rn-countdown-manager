## rn-countdown

Manage countdowns and get a cool visual component!

<p align="center">
  <img src="img/countdown.gif" alt="Countdown" width="300">
</p>

## Installation

Currently, the lib is still under development :disappointed:

## Usage

1. `useCountdown` hook - manages all time props and methods

```jsx
import { useCountdown } from 'rn-countdown';

const {
  isRunning, // hook is still running
  isPaused, // hook is paused
  isFinished, // hook is finished
  pause, // pauses the hook
  resume, // resume the hook if is paused
  start, // start hook if autoStart prop is false
  reset, // reset the hook passing a new hour, minute and second
  formattedTime, // time formatted as HH:MM:SS
  hours, // current hours
  minutes, // curent minutes
  seconds, // current seconds
} = useCountdown({
  autoStart: false, // tells if hook stats on mount
  hours: 1, // starting hours (Max to 99)
  minutes: 2, // starting minutes (Max to 59)
  seconds: 3, // starting seconds (Max to 59)
  onComplete: () => console.log('Finished!'), // callback when hook finishes
});
```

2. `Countdown` component - purely visual component, based on a 7-segment display

```jsx
import { Countdown, useCountdown } from 'rn-countdown';

<Countdown
  hours={hours} // hours on component (Max to 99)
  minutes={minutes} // minutes on component (Max to 59)
  seconds={seconds} // seconds on component (Max to 59)
  fillColor="red" // cell color when on (defaults to #FFFFFF)
  color="black" // cell color when off (defaults to transparent)
  separator=":" // separate blocks of 2 digits, e.g: if the separator is "-" time will be HH-MM-SS
  showHours={true} // if hours digits should be shown
  showMinutes={true} // if minutes digits should be shown
  size="md" // Component size, can be "sm", "md" or "lg"
/>;
```

## Upcoming features

- Add custom assets to each cell; (Medium prio)
- Add tests; (High prio)
- Add storybook/playground; (Medium prio)
