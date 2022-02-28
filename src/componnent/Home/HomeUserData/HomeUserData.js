import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import nft1 from "../../../img/nft1.png";

const HomeUserData = () => {
  return (
    <Box sx={{ mt: 7, pl: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar
          sx={{ border: 1, borderColor: "#DBDBDB" }}
          alt="Travis Howard"
          src={nft1}
        />
        <Typography
          sx={{ ml: 2, fontSize: 14, fontWeight: 600, mt: 1 }}
          variant="h6"
          component="h6"
        >
          Raton
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeUserData;
