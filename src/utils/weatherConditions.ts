import translate from "../locales";

const weatherConditions = (conditions: string | undefined) => {
  switch (conditions) {
    case 'Thunderstorm': {
      return translate('thunderstorm');
    }
    case 'Drizzle': {
      return translate('drizzle');
    }
    case 'Rain': {
      return translate('rain');
    }
    case 'Snow': {
      return translate('snow');
    }
    case 'Clear': {
      return translate('clear');
    }
    case 'Clouds': {
      return translate('clouds');
    }
    default: {
      return translate('clouds');
    }
  }
}

export default weatherConditions
