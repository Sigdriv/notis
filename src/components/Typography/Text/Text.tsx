// Inspo from: tipverse - Trondheim kommune

import { Typography, useTheme } from "@mui/material";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "ingress";
}
export function Text({ children, variant }: Props) {
  const {
    palette: { text },
  } = useTheme();

  return (
    <Typography
      variant={variant === "ingress" ? "body2" : "body1"}
      lineHeight={variant === "ingress" ? "1.6" : undefined}
      fontSize={variant === "ingress" ? "1.25rem" : "1rem"}
      color={text.primary}
    >
      {children}
    </Typography>
  );
}
