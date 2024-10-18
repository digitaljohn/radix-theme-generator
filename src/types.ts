import { generateRadixColors } from "./utils/generateRadixColors";

export type GeneratedColors = ReturnType<typeof generateRadixColors>;

export type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

export const grayScaleNames = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;

export const scaleNames = [
  ...grayScaleNames,
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "brown",
  "orange",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
] as const;
