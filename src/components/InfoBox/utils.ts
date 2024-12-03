import { Check, Error, Info, Warning } from "@mui/icons-material";

export const variantIcon = {
  success: Check,
  warning: Warning,
  error: Error,
  info: Info,
} as const;
