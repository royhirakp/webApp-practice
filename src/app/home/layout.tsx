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
        paddingTop: "5%",
        paddingLeft: "7%",
        paddingRight: "7%",
        // paddingTop: {
        //   xs: "",
        //   md: "1rem",
        //   xl: "1.5rem",
        // },
        // paddingLeft: {
        //   xs: "1px",
        //   md: "1rem",
        //   xl: "8rem",
        // },
        // paddingRight: {
        //   xs: "1px",
        //   md: "1rem",
        //   xl: "8rem",
        // },
      }}
    >
      {children}
    </Box>
  );
}
