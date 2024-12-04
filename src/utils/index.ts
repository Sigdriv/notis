import { useTheme } from "@mui/material";

export const useColors = () => {
  const {
    palette: { primary, secondary },
  } = useTheme();

  return {
    primaryMain: primary.main,
    secondaryMain: secondary.main,
  };
};
