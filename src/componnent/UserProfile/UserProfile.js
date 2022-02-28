import React from "react";
import { Avatar, Box, Container, Grid } from "@mui/material";
import nft2 from "../../img/nft2.png";

const UserProfile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 5 }}>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          borderBottom: 1,
          borderColor: "#DBDBDB",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
        />
        <Box xs={12}>
          <p
            style={{
              fontSize: 26,
              fontWeight: 300,
              marginLeft: 60,
              paddingTop: 25,
            }}
          >
            Raton
          </p>
          <Box sx={{ display: { xs: "block", md: "flex" }, pb: 4 }} xs={12}>
            <h2
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginLeft: 60,
              }}
            >
              37 Post
            </h2>
            <h2
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginLeft: 60,
              }}
            >
              47 followers
            </h2>
            <h2
              style={{
                fontSize: 16,
                fontWeight: 600,
                marginLeft: 60,
              }}
            >
              104 following
            </h2>
          </Box>
        </Box>
      </Box>
      <Box>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>Post</h2>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img src={nft2} width={270} height={300} alt="" />
          </Grid>
          <Grid item md={4}>
            <img src={nft2} width={270} height={300} alt="" />
          </Grid>
          <Grid item md={4}>
            <img src={nft2} width={270} height={300} alt="" />
          </Grid>
          <Grid item md={4}>
            <img src={nft2} width={270} height={300} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserProfile;
