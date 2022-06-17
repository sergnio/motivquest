import { StyleSheet } from "react-native";

export const marginPadding = {
  xs: 5,
  s: 10,
  m: 20,
  l: 40,
  xl: 80,
};

export const flexRow = {
  display: "flex",
  flexDirection: "row",
};

export const colors = {
  white: "hsl(100, 100%, 100%)",
  black: "hsl(0, 0%, 0%)",
  blue100: "hsl(224, 94.2%, 90%)",
  blue200: "hsl(224, 94.2%, 80%)",
  blue300: "hsl(224, 94.2%, 70%)",
  blue400: "hsl(224, 94.2%, 60%)",
  blue500: "hsl(224, 94.2%, 50%)",
  blue600: "hsl(224, 94.2%, 40%)",
  blue700: "hsl(224, 94.2%, 30%)",
  blue800: "hsl(224, 94.2%, 20%)",
  blue900: "hsl(224, 94.2%, 10%)",
};

/**
 * * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

 :root {
  --widthHeight: 100px;
  --white: hsl(100, 100%, 100%);
  --blue100: hsl(224, 94.2%, 90%);
  --blue200: hsl(224, 94.2%, 80%);
  --blue300: hsl(224, 94.2%, 70%);
  --blue400: hsl(224, 94.2%, 60%);
  --blue500: hsl(224, 94.2%, 50%);
  --blue600: hsl(224, 94.2%, 40%);
  --blue700: hsl(224, 94.2%, 30%);
  --blue800: hsl(224, 94.2%, 20%);
  --blue900: hsl(224, 94.2%, 10%);
}

 .center,
 body {
  display: flex;
  justify-content: center;
  align-items: center;
}

 body {
  min-height: 100vh;
}

 .bottle {
  position: relative;
  width: var(--widthHeight);
  height: var(--widthHeight);
  background-color: var(--blue600);
  border: 0.25rem solid var(--blue700);
  border-radius: 50%;
  outline: 0;
overflow: hidden;
}

.bottle::before {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottle::after {
  content: "";
  position: absolute;
  width: 125px;
  height: 125px;
  background-color: var(--blue800);
  background-color: var(--white);
  border-radius: 45%;
  animation: spin 3s ease-in-out forwards;
}

@keyframes spin {
  0% {
    transform: translateY(0) rotate(0deg);
}
  100% {
    transform: translateY(-50%) rotate(500deg);
}
}

*/
