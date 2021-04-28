## Sobre o Projeto

Este projeto é um app de clima, onde é consumido a Weather API.

### Feito Com

- React Native
- Typescript
- Styled Components
- React Native Config
- React Redux
- Redux Toolkit
- React Hooks
- Context API
- Axios
- Internationalization i18n js
- Reactotron
- ESLint
- Prettier
- Airbnb Style Guide

## Começando

O projeto contém alguns scripts para serem rodados pois é setado o ambiente que está rodando, por mais que a api possua apenas um ambiente é legal ter essa estrutura pronta para o futuro. Um exemplo é: yarn ios-dev, yarn android-dev. Esses dois comandos rodam o ambiente de desenvolvimento na respectiva plataforma, android ou ios.

### Pré-requisitos

Por usar a versão 0.64 do RN existem alguns problemas quanto a versões do xcode e do simulator. O recomendado é xcode 12+ e ios 14+.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
├── src/
│   ├── @types/
│   │   └── index.d.ts
│   ├── assets/
│   │   └── fonts/
│   │       └── Barlow-Bold.ttf
│   │       └── Barlow-Light.ttf
│   │       └── Barlow-Regular.ttf
│   │       └── Barlow-SemiBold.ttf
│   │   └── images/
│   │       └── error.jpeg
│   │       └── errorLocation.jpeg
│   ├── components/
│   │   └── forecast/
│   │       └── forecast.tsx
│   │       └── stylex.ts
│   │   └── header/
│   │       └── header.tsx
│   │       └── stylex.ts
│   │   └── temperature/
│   │       └── temperature.tsx
│   │       └── stylex.ts
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── hooks/
│   │   └── theme.tsx
│   ├── locales/
│   │   └── en-US.ts
│   │   └── index.ts
│   │   └── pt-BR.ts
│   ├── pages/
│   │   └── error/
│   │       └── error.tsx
│   │       └── styles.tsx
│   │   └── MainWeather/
│   │       └── MainWeather.tsx
│   │       └── styles.tsx
│   ├── routes/
│   │   └── app.routes.tsx
│   │   └── index.tsx
│   ├── services/
│   │   └── api.ts
│   │   └── getForecast.ts
│   │   └── getWeather.ts
│   ├── store/
│   │   └── index.ts
│   │   └── modules/
│   │       └── index.ts
│   │       └── forecast/
│   │           └── forecast.store.ts
│   │       └── location/
│   │           └── location.store.ts
│   │       └── weather/
│   │           └── weather.store.ts
│   ├── themes/
│   │   └── britishPalette.ts
│   │   └── chinesePalette.ts
│   │   └── styled.d.ts
│   ├── utils/
│   │   └── roundNumber.ts
│   │   └── uniqueDateArray.ts
│   │   └── weatherConditions.ts
│   ├── App.tsx
├── _editorconfig
├── .buckconfig
├── .editorconfig
├── .env.development
├── .env.production
├── .env.staging
├── .eslintignore
├── .eslintrc.json
└── .gitattributes
├── .gitignore
└── .watchmanconfig
└── app.json
├── babel.config.js
├── index.js
└── metro.config.js
├── package.json
├── prettier.config.js
└── react-native.config.js
└── tsconfig.json
└── yarn.lock
└── README.md
```

### Como rodar

O primeiro passo é rodar o "yarn" na raiz do projeto, seguido de um "cd ios && pod install && cd ..", depois "yarn ios-dev" e lembrando que o ios e dev podem ser variados como para android e staging por exemplo.
