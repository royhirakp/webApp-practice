import { Box } from "@mui/material";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
    //   sx={{
    //     backgroundColor: "#dedeea",
    //     paddingTop: {
    //       xs: "5%",
    //       md: "1%",
    //     },
    //     paddingLeft: {
    //       xs: "4%",
    //       md: "7%",
    //     },
    //     paddingRight: {
    //       xs: "4%",
    //       md: "7%",
    //     },
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
    //   }}
    >
      {children}
    </Box>
  );
}
