import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  primary: "#202020",
  secondary: "#313131",
  light: "#F2F8FF",
  link: "#005196",
  grey: "#B7B7B7",
};

const successColors = {
  main: "#008939",
  light: "#E6F5EC",
  dark: "#004C1F",
};

const infoColors = {
  main: "#005AA7",
  light: "#E6F5FC",
  dark: "#002D53",
};

const errorColors = {
  main: "#CD1C17",
  light: "#FCE9E9",
  dark: "#ff3333",
};

const warningColors = {
  main: "#D97E00",
  light: "#FEF4E6",
  dark: "#794600",
};

const textColors = {
  primary: "#FAF9F6",
  secondary: baseColors.black,
  disabled: "#CCDEED",
  contrast: "#FFFFFF",
};

const colors = {
  ...baseColors,
  text: textColors,
  warning: warningColors,
  error: errorColors,
  info: infoColors,
  success: successColors,
} as const;

export const theme: Theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondary,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary,
        },
      },
    },
  },
  palette: {
    contrastThreshold: 4.5,
    common: {
      black: colors.black,
      white: colors.white,
    },
    divider: colors.grey,
    text: {
      primary: colors.text.primary,
      secondary: colors.black,
      disabled: colors.text.disabled,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    primary: {
      main: colors.primary,
      light: colors.light,
      contrastText: colors.text.contrast,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.link,
      contrastText: colors.black,
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
      contrastText: colors.black,
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
      contrastText: colors.black,
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
      contrastText: colors.black,
    },
    info: {
      main: colors.info.main,
      light: colors.info.light,
      dark: colors.info.dark,
      contrastText: colors.black,
    },
  },
});
