# :rocket: React Native Template Nave Typescript

> React Native Template for a quick start with typescript and other features

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-nave-typescript
```

## :star: Packages already configured

- [Typescript](https://github.com/microsoft/TypeScript)
- [Axios](https://github.com/axios/axios)
- [Module resolver](https://github.com/benmosher/eslint-plugin-import)
- [Styled-components](https://styled-components.com/)
- [React-navigation](https://github.com/styled-components)
- [Reactotron](https://github.com/infinitered/reactotron)

## :computer: Code pattern

Besides of all the things talked in the [nave guide](https://nave.gitlab.io/guides/nave/code-guide/), as import standards and best practices using Javascript, there are some best practices to be used, mainly in components and pages creation.

1. Avoid to use unnecessary styleds. We already have the Row, Column, Button and Text component deal with that on pages. Besides that, the mentioned components have the styled-system, that allows to pass margins, padding and anothers ones throught props.
2. In a new component creating, always think about the use of [styled-system](https://styled-system.com/getting-started/).
3. NEVER repeat the same code 2 times. Do not copy and paste, instead of this, create some helpers and components. Make your code reusable.
4. If you need to create a new component with variants, take a look at the Text component and use the variant prop from the styled-system.
5. Follow the code pattern and folder standard.

## :wrench: Running & Testing

To run this template as a app in your environment follow these steps

Clone the repository

```sh
git clone https://github.com/naveteam/react-native-nave-typescript.git
```

If you use SSH keys on Github

```sh
git clone git@github.com:naveteam/react-native-nave-typescript.git
```

```sh
cd react-native-nave-typescript/template
```

Create the following files, under the template's directory, with the content on their respective `files.example` file found in this repository

- .prettierrs.js
- .eslintrc.js
- .buckconfig
- .watchmanconfig

Installing the app dependencies

```sh
yarn && yarn pod-install
```

Running the application

Android

```sh
yarn android
```

iOS

```sh
yarn ios
```

Android

```sh
yarn android
```

iOS

```sh
yarn ios
```

In [package.json](https://github.com/naveteam/react-native-nave-typescript/blob/main/template/package.json) on the `scripts` section there are more scripts to manage the application.

Running tests

Android

```sh
yarn detox-android-release

```

iOS

```sh
yarn detox-ios-debug

```
