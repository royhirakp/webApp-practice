import { Box } from "@mui/material";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NavBar /> */}
      <Box sx={{ margin: "0 5% 0 5%" }}>{children}</Box>
    </>
  );
}
