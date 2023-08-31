import { Box } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#dedeea",
        paddingTop: {
          xs: "0.5rem",
          md: "1rem",
          xl: "1.5rem",
        },
        paddingLeft: {
          xs: "1rem",
          md: "5rem",
          xl: "8rem",
        },
        paddingRight: {
          xs: "1rem",
          md: "5rem",
          xl: "8rem",
        },
      }}
    >
      {children}
    </Box>
  );
}
