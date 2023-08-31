"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "@/assec/photo5 (1).jpg";
import { Stack, Box } from "@mui/material";
// import Button from '@mui/material-next/Button';
// import logo from "../../data/headerLogo.png";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export default function ProductCard() {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        border: "1px solid",
        borderRadius: "15px",
        boxSizing: "border-box",
        padding: "5px",
        margin: "1rem",
        // flexGrow: 1,
        maxWidth: {
          xs: "100%",
          sm: "40%",
          md: 250,
          // lg: 110,
          xl: 350,
        },
      }}
    >
      <Stack>
        {/* <Image width={50} height={50} src={logo} alt="a" /> */}
        {/* <div>
          <img
            style={{ width: "80%" }}
            src="https://cataas.com/cat/says/hello%20world!"
            alt="cat"
          />
        </div> */}
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontSize: {
              xs: 10,
              md: 15,
              xl: 20,
            },
          }}
          variant="h5"
        >
          Title
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 7,
              md: 10,
              xl: 15,
            },
          }}
          variant="body1"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          facilis earum nisi. Doloremque quidem commodi dolor asperiores
          explicabo laborum, aspernatur voluptatem eligendi saepe, fugit veniam
          nostrum? Quasi doloremque molestiae temporibus!
        </Typography>
      </Stack>
      <Stack direction="row">
        <Button variant="outlined">Share</Button>
        <Button variant="outlined">Learn More</Button>
      </Stack>
    </Box>
  );
}

/*
<Box
      sx={{
        border: "1px solid",
        marginTop: "1rem",
        borderRadius: "15px",
        boxSizing: "border-box",
        // maxWidth: {
        //   xs: 200,
        //   // sm: 80,
        //   md: 250,
        //   // lg: 110,
        //   xl: 350,
        // },
      }}
    >
      <Stack sx={{ borderRadius: "15px" }} maxWidth={500}>
        <Image src={logo} alt="hii" />{" "}
      </Stack>
      <Typography
        // sx={{
        //   fontSize: {
        //     xs: 15,
        //     md: 20,
        //     xl: 30,
        //   },
        // }}
        variant="h5"
        component="h5"
      >
        Lizard
      </Typography>
      <Typography
        // sx={{
        //   fontSize: {
        //     xs: 10,
        //     md: 15,
        //     xl: 25,
        //   },
        // }}
        variant="body2"
        color="text.secondary"
      >
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
      <Button variant="contained" color="success">
        Share
      </Button>
      <Button variant="contained" color="success">
        Learn More
      </Button>
    </Box>
*/
