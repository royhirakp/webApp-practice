import { Box } from "@mui/material";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NavBar /> */}
      <Box
      // sx={{
      //   backgroundColor: "#dedeea",

      //   paddingLeft: {
      //     xs: "4%",
      //     md: "7%",
      //   },
      //   paddingRight: {
      //     xs: "4%",
      //     md: "7%",
      //   },
      // }}
      >
        {children}
      </Box>
    </>
  );
}
