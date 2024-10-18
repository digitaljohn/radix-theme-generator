/**
 * @jest-environment jsdom
 */

import {
  generateRadixColors,
  getBackgroundColorCss,
  getColorScaleCss,
} from "../src";

const accentValue = "#3D63DD";
const grayValue = "#8B8D98";
const lightBgValue = "#FFFFFF";
const darkBgValue = "#111111";

describe("Basic functionality", () => {
  it("should generate a light theme", async () => {
    const result = generateRadixColors({
      appearance: "light",
      accent: accentValue,
      gray: grayValue,
      background: lightBgValue,
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

    expect(css).toMatchSnapshot();
  });

  it("should generate a dark theme", async () => {
    const result = generateRadixColors({
      appearance: "dark",
      accent: accentValue,
      gray: grayValue,
      background: darkBgValue,
    });

    const css = getColorScaleCss({
      isDarkMode: true,
      name: "blue",
      contrast: result.accentContrast,
      scale: result.accentScale,
      scaleWideGamut: result.accentScaleWideGamut,
      scaleAlpha: result.accentScaleAlpha,
      scaleAlphaWideGamut: result.accentScaleAlphaWideGamut,
      surface: result.accentSurface,
      surfaceWideGamut: result.accentSurfaceWideGamut,
    });

    expect(css).toMatchSnapshot();
  });

  it("should generate grey scales", async () => {
    const result = generateRadixColors({
      appearance: "light",
      accent: accentValue,
      gray: grayValue,
      background: darkBgValue,
    });

    const css = getColorScaleCss({
      isDarkMode: false,
      name: "gray",
      contrast: "#fff",
      scale: result.grayScale,
      scaleWideGamut: result.grayScaleWideGamut,
      scaleAlpha: result.grayScaleAlpha,
      scaleAlphaWideGamut: result.grayScaleAlphaWideGamut,
      surface: result.graySurface,
      surfaceWideGamut: result.graySurfaceWideGamut,
    });

    expect(css).toMatchSnapshot();
  });

  it("should generate background value", async () => {
    const result = generateRadixColors({
      appearance: "light",
      accent: accentValue,
      gray: grayValue,
      background: darkBgValue,
    });

    const css = getBackgroundColorCss({
      isDarkMode: false,
      background: result.background,
    });

    expect(css).toMatchSnapshot();
  });
});
