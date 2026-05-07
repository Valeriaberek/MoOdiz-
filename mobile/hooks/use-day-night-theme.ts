import { useEffect, useState } from 'react';

function getIsNightNow() {
  const hour = new Date().getHours();

  return hour >= 19 || hour < 6;
}

export function useDayNightTheme() {
  const [isNight, setIsNight] = useState(getIsNightNow);

  useEffect(() => {
    const updateTheme = () => {
      setIsNight(getIsNightNow());
    };

    updateTheme();
    const intervalId = setInterval(updateTheme, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    isNight,
    backgroundColor: isNight ? '#0B1020' : '#F4F4F6',
    textColor: isNight ? '#F5F7FF' : '#050505',
    subtitleColor: isNight ? '#B4B8C8' : '#C7C9D3',
    buttonColor: isNight ? '#7B5CE6' : '#C969D6',
    accentColor: isNight ? '#B8A7FF' : '#C969D6',
  };
}