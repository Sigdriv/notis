import { Breadcrumbs as BreadcrumbsMui, Link, Stack } from "@mui/material";

interface Props {
  crumbs: { label: string; href: string }[];
  children?: React.ReactNode;
}

export function Breadcrumbs({ crumbs, children }: Props) {
  return (
    <Stack gap="2rem">
      <BreadcrumbsMui aria-label="breadcrumb" sx={{ color: "white" }}>
        {crumbs.map(({ label, href }) => (
          <Link
            underline="hover"
            color="white"
            href={href}
            key={JSON.stringify({ label, href })}
          >
            {label}
          </Link>
        ))}
      </BreadcrumbsMui>

      {children}
    </Stack>
  );
}
