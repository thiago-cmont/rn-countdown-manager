import { getHours } from './getHours';
import { getMinutes } from './getMinutes';
import { getSeconds } from './getSeconds';

const SEPARATOR = ' : ';

export const formatToTimeString = (time?: number) => {
  const formattedTime = '0' + String(time);
  return formattedTime.slice(-2);
};

export const getFormattedTime = (remainingTime: number): string => {
  const formattedHour = formatToTimeString(getHours(remainingTime));

  const formattedMinutes = formatToTimeString(getMinutes(remainingTime));

  const formattedSeconds = formatToTimeString(getSeconds(remainingTime));
  return `${
    formattedHour + SEPARATOR + formattedMinutes + SEPARATOR + formattedSeconds
  }`;
};
