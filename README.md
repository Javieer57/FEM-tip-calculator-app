# Tip calculator

[![Netlify Status](https://api.netlify.com/api/v1/badges/832646b7-071b-4809-b14f-ab06a94a5352/deploy-status)](https://app.netlify.com/projects/javieer57-tip-calculator/deploys)

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Build with](#build-with)
  - [Implementation Notes](#implementation-notes)
    - [State Management with RTK](#state-management-with-rtk)
    - [Testing with Vitest](#testing-with-vitest)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.png)

### Links

- Solution: [Tip calculator app (React, Vite, Typescript, Tailwind)](https://www.frontendmentor.io/solutions/tip-calculator-app-react-vite-typescript-tailwind-AmF7guhBmS)
- Site: [https://javieer57-tip-calculator.netlify.app/](https://javieer57-tip-calculator.netlify.app/)

## My process

### Build with

- Semantic HTML
- Keyboard navigation
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)
- [React](https://es.react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com/)

### Implementation Notes

#### State Management with RTK

The application state is managed using a simple structure, as shown below.

```typescript
export interface CalculatorState {
  bill: string;
  people: string;
  tip: {
    current: string;
    custom: string;
    selected: string;
  };
  tipAmount: number;
  totalPerPerson: number;
}

export const initialState: CalculatorState = {
  bill: "",
  people: "",
  tip: {
    current: "",
    custom: "",
    selected: "",
  },
  tipAmount: 0,
  totalPerPerson: 0,
};
```

Most fields use strings to simplify handling the calculator inputs, since number types would display a default '0' in the text fields.

#### Testing with Vitest

Tests that need the Redux store use the `renderWithStore` function. This function reduces code duplication and makes the tests easier to read.

```typescript
export const renderWithStore = (ui: React.ReactNode, preloadedState = {}) => {
  const store = configureStore({
    reducer: { calculator: calculatorReducer },
    preloadedState,
  });

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
};
```

#### Continued development

During the project, I didn’t follow a standard for commit messages. I understand there are tools that allow you to define commit requirements, and I plan to research more about them.

## Author

- Frontend Mentor - [@Javieer57](https://www.frontendmentor.io/profile/Javieer57)
- Codepen - [@e_javieer](https://codepen.io/e_javieer)
