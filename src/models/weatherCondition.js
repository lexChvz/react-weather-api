import { padNumber } from '../helpers/common';

export default function weatherCondition(data) {
  if (data) {
    return data.map((obj) => {
      const condition = {
        date: new Date(obj.LocalObservationDateTime).toString(),
        forecast: obj.WeatherText,
        icon: `https://developer.accuweather.com/sites/default/files/${padNumber(obj.WeatherIcon)}-s.png`,
        temp: {
          c: obj.Temperature && obj.Temperature.Metric ? `${parseFloat(obj.Temperature.Metric.Value)}°C` : null,
          f: obj.Temperature && obj.Temperature.Imperial ? `${parseFloat(obj.Temperature.Imperial.Value)}°F` : null,
        },
        link: obj.Link,
      };
      return condition;
    });
  }
}
