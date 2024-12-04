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

export function Header3({ headerLevel = "h3", children }: HeaderProps) {
  return (
    <HeaderBase
      headerLevel={headerLevel}
      fontSize="1.5rem"
      paddingBottom="0.5rem"
      children={children}
    />
  );
}

export function Header4({ headerLevel = "h4", children }: HeaderProps) {
  return (
    <HeaderBase
      headerLevel={headerLevel}
      fontSize="1.25rem"
      paddingBottom="0.4rem"
      children={children}
    />
  );
}

export function Header5({ headerLevel = "h5", children }: HeaderProps) {
  return (
    <HeaderBase
      headerLevel={headerLevel}
      fontSize="1.125rem"
      paddingBottom="0.1rem"
      children={children}
    />
  );
}
