// Inspo from: tipverse - Trondheim kommune

import { ReactNode } from "react";
import { Box, Icon, Stack } from "@mui/material";
import { Header4 } from "../Typography/Header/Header";
import { variantIcon } from "./utils";

interface Props {
  variant?: "info" | "success" | "warning" | "error";
  header?: string;
  children?: ReactNode;
}

export function InfoBox({ variant = "info", header, children }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: `${variant}.light`,
        border: `1px solid`,
        borderColor: `${variant}.dark`,
        borderRadius: "4px",
        color: "text.secondary",
        width: "fit-content",
        maxWidth: "100%",
        padding: "1.15rem",
      }}
    >
      <Stack direction="row" gap="1rem">
        <Icon
          component={variantIcon[variant]}
          sx={{
            color: `${variant}.main`,
            alignSelf: "flex-start",
            m: "0.25rem 0 0 0",
          }}
        />

        <Stack gap=".5rem">
          {header && <Header4 headerLevel="h4">{header}</Header4>}

          {children}
        </Stack>
      </Stack>
    </Box>
  );
}
