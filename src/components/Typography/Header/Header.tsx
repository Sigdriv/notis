// Inspo from: tipverse - Trondheim kommune

import { Typography } from "@mui/material";

type HeaderProps = {
  headerLevel?: "h1" | "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
};

function HeaderBase({
  headerLevel,
  fontSize,
  paddingBottom,
  children,
}: HeaderProps & { fontSize: string; paddingBottom: string }) {
  return (
    <Typography
      variant={headerLevel}
      fontSize={fontSize}
      fontWeight="bold"
      maxWidth="75ch"
      paddingBottom={paddingBottom}
      color="white"
      sx={{
        wordBreak: "break-word",
        wordWrap: "break-word",
      }}
    >
      {children}
    </Typography>
  );
}

export function Header1({ headerLevel = "h1", children }: HeaderProps) {
  return (
    <HeaderBase
      headerLevel={headerLevel}
      fontSize="2.5rem"
      paddingBottom="1rem"
      children={children}
    />
  );
}

export function Header2({ headerLevel = "h2", children }: HeaderProps) {
  return (
    <HeaderBase
      headerLevel={headerLevel}
      fontSize="1.85rem"
      paddingBottom="0.7rem"
      children={children}
    />
  );
}
