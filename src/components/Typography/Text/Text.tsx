// Inspo from: tipverse - Trondheim kommune

import { Typography, useTheme } from "@mui/material";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "ingress";
  color?: "error" | "white";
}
export function Text({ children, variant, color = "white" }: Props) {
  return (
    <Typography
      variant={variant === "ingress" ? "body2" : "body1"}
      lineHeight={variant === "ingress" ? "1.6" : undefined}
      fontSize={variant === "ingress" ? "1.25rem" : "1rem"}
      color={color}
    >
      {children}
    </Typography>
  );
}
