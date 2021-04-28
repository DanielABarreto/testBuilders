import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate: { [key: string]: string } = {
  'en-US': 'en-US',
  'pt-BR': 'pt-BR',
  en: 'en-US',
  'pt-US': 'pt-BR',
};

const getLanguageByDevice = () => {
  return RNLocalize.getLocales()[0].languageTag;
};

I18n.translations = {
  'en-US': en,
  'pt-BR': pt,
};

const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize: string = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations[translateNormalize];
  if (iHaveThisLanguage) {
    I18n.locale = translateNormalize;
  } else {
    I18n.defaultLocale = 'pt-BR';
  }
};

setLanguageToI18n();

const translate = (key: string) => I18n.t(key);

export default translate;
