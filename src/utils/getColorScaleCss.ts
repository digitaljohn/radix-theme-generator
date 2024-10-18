import { GeneratedColors } from "../types";

interface GetColorScaleCssParams {
  isDarkMode: boolean;
  name: string;
  scale: GeneratedColors["accentScale"];
  scaleWideGamut: GeneratedColors["accentScaleWideGamut"];
  scaleAlpha: GeneratedColors["accentScaleAlpha"];
  scaleAlphaWideGamut: GeneratedColors["accentScaleAlphaWideGamut"];
  contrast: GeneratedColors["accentContrast"];
  surface: GeneratedColors["accentSurface"];
  surfaceWideGamut: GeneratedColors["accentSurfaceWideGamut"];
}

export const getColorScaleCss = ({
  isDarkMode,
  name,
  scale,
  scaleWideGamut,
  scaleAlpha,
  scaleAlphaWideGamut,
  contrast,
  surface,
  surfaceWideGamut,
}: GetColorScaleCssParams) => {
  const selector = isDarkMode
    ? ".dark, .dark-theme"
    : ":root, .light, .light-theme";

  return `
${selector} {
  ${scale
    .map((value, index) => `--${name}-${index + 1}: ${value};`)
    .join("\n  ")}

  ${scaleAlpha
    .map((value, index) => `--${name}-a${index + 1}: ${value};`)
    .join("\n  ")}

  --${name}-contrast: ${contrast};
  --${name}-surface: ${surface};
  --${name}-indicator: ${scale[8]};
  --${name}-track: ${scale[8]};
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    ${selector} {
      ${scaleWideGamut
        .map((value, index) => `--${name}-${index + 1}: ${value};`)
        .join("\n      ")}

      ${scaleAlphaWideGamut
        .map((value, index) => `--${name}-a${index + 1}: ${value};`)
        .join("\n      ")}

      --${name}-contrast: ${contrast};
      --${name}-surface: ${surfaceWideGamut};
      --${name}-indicator: ${scaleWideGamut[8]};
      --${name}-track: ${scaleWideGamut[8]};
    }
  }
}
  `.trim();
};

export const getBackgroundColorCss = ({
  isDarkMode,
  background,
}: {
  isDarkMode: boolean;
  background: string;
}) => {
  if (isDarkMode) {
    return `
.dark, .dark-theme, :is(.dark, .dark-theme) :where(.radix-themes:not(.light, .light-theme)) {
  --color-background: ${background};
}
    `.trim();
  }

  return `
:root, .light, .light-theme, .radix-themes {
  --color-background: ${background};
}
  `.trim();
};
