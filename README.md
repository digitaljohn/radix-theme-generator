# radix-theme-generator

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

A simple, lightweight, and customizable library that allows you to generate Radix UI themes on the fly. It helps you create dynamic color scales and CSS variables for theming your applications using Radix UI colors.

## Introduction

At its core, radix-theme-generator enables you to programmatically generate color scales and CSS variables based on Radix UI color scales, allowing you to create custom themes dynamically for your application.

Here is a minimal example of generating a theme with a custom accent color:

```ts
const accentValue = "#3D63DD"; // Your custom accent color

const result = generateRadixColors({
  appearance: "light",
  accent: accentValue,
  gray: "#8B8D98",
  background: "#FFFFFF",
});

const css = getColorScaleCss({
  isDarkMode: false,
  name: "blue",
  contrast: result.accentContrast,
  scale: result.accentScale,
  scaleWideGamut: result.accentScaleWideGamut,
  scaleAlpha: result.accentScaleAlpha,
  scaleAlphaWideGamut: result.accentScaleAlphaWideGamut,
  surface: result.accentSurface,
  surfaceWideGamut: result.accentSurfaceWideGamut,
});

// Output the CSS variables for your theme
console.log(css);
```

This outputs a set of CSS variables that can be used to theme your application.

## Installation

Install this package with `npm`.

```bash
npm i radix-theme-generator
```

## Usage

Here is a full example of generating both light and dark themes with custom accent and gray colors.

```ts
import {
  generateRadixColors,
  getColorScaleCss,
  getBackgroundColorCss,
} from "radix-theme-generator";

const accentValue = "#3D63DD"; // Your custom accent color
const grayValue = "#8B8D98"; // Your custom gray color
const lightBgValue = "#FFFFFF"; // Light theme background
const darkBgValue = "#111111"; // Dark theme background

// Generate light theme colors
const lightThemeColors = generateRadixColors({
  appearance: "light",
  accent: accentValue,
  gray: grayValue,
  background: lightBgValue,
});

// Generate dark theme colors
const darkThemeColors = generateRadixColors({
  appearance: "dark",
  accent: accentValue,
  gray: grayValue,
  background: darkBgValue,
});

// Get CSS variables for light theme
const lightThemeCss = getColorScaleCss({
  isDarkMode: false,
  name: "blue",
  contrast: lightThemeColors.accentContrast,
  scale: lightThemeColors.accentScale,
  scaleWideGamut: lightThemeColors.accentScaleWideGamut,
  scaleAlpha: lightThemeColors.accentScaleAlpha,
  scaleAlphaWideGamut: lightThemeColors.accentScaleAlphaWideGamut,
  surface: lightThemeColors.accentSurface,
  surfaceWideGamut: lightThemeColors.accentSurfaceWideGamut,
});

// Get CSS variables for dark theme
const darkThemeCss = getColorScaleCss({
  isDarkMode: true,
  name: "blue",
  contrast: darkThemeColors.accentContrast,
  scale: darkThemeColors.accentScale,
  scaleWideGamut: darkThemeColors.accentScaleWideGamut,
  scaleAlpha: darkThemeColors.accentScaleAlpha,
  scaleAlphaWideGamut: darkThemeColors.accentScaleAlphaWideGamut,
  surface: darkThemeColors.accentSurface,
  surfaceWideGamut: darkThemeColors.accentSurfaceWideGamut,
});

// Output the CSS variables
console.log(lightThemeCss);
console.log(darkThemeCss);
```

## Generating Background Colors

You can also generate background color variables using the getBackgroundColorCss function:

```tsx
const backgroundCss = getBackgroundColorCss({
  isDarkMode: false,
  background: lightThemeColors.background,
});

console.log(backgroundCss);
```

## API

### `generateRadixColors(options)`

Generates Radix UI color scales based on the provided options.

#### Parameters:

- options.appearance: "light" or "dark" — Specifies the theme appearance.
- options.accent: string — The base color for the accent color scale.
- options.gray: string — The base color for the gray color scale.
- options.background: string — The background color.

#### Returns:

An object containing generated color scales and additional properties:

- accentScale
- accentScaleWideGamut
- accentScaleAlpha
- accentScaleAlphaWideGamut
- accentContrast
- accentSurface
- accentSurfaceWideGamut
- grayScale
- grayScaleWideGamut
- grayScaleAlpha
- grayScaleAlphaWideGamut
- graySurface
- graySurfaceWideGamut
- background

### `getColorScaleCss(options)`

Generates CSS variables for a given color scale.

#### Parameters:

- options.isDarkMode: boolean — Specifies if the theme is dark mode.
- options.name: string — The name of the color scale (e.g., "blue", "gray").
- options.contrast: string — The contrast color for text.
- options.scale: string[] — The color scale array.
- options.scaleWideGamut: string[] — The wide gamut color scale array.
- options.scaleAlpha: string[] — The alpha color scale array.
- options.scaleAlphaWideGamut: string[] — The wide gamut alpha color scale array.
- options.surface: string — The surface color.
- options.surfaceWideGamut: string — The wide gamut surface color.

#### Returns:

A string containing CSS variables for the color scale.

### `getBackgroundColorCss(options)`

Generates CSS variables for the background color.

#### Parameters:

- options.isDarkMode: boolean — Specifies if the theme is dark mode.
- options.background: string — The background color.

#### Returns:

A string containing the CSS variable for the background color.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

[npm-image]: https://img.shields.io/npm/v/radix-theme-generator.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/radix-theme-generator
[npm-downloads-image]: https://img.shields.io/npm/dm/radix-theme-generator.svg
[npm-downloads-url]: https://npmcharts.com/compare/radix-theme-generator?minimal=true
[ci-image]: https://github.com/digitaljohn/radix-theme-generator/workflows/test/badge.svg
[ci-url]: https://github.com/digitaljohn/radix-theme-generator/actions
