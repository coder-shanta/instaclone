import React from "react";
import { Container } from "@mui/material";
import AllPost from "./../AllPost/AllPost";
import { Box } from "@mui/material";
import HomeUserData from "./HomeUserData/HomeUserData";
import Suggestions from "./Suggestions/Suggestions";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box xs={12}>
          <AllPost></AllPost>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <HomeUserData></HomeUserData>
          <Suggestions></Suggestions>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
