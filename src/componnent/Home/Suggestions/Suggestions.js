import { Box } from "@mui/material";
import React from "react";
import { Avatar, Typography } from "@mui/material";
import avatar from "../../../img/avatar.jpg";
const Suggestions = () => {
  return (
    <Box sx={{ ml: 3 }}>
      <Box sx={{ display: "flex" }}>
        <h5 style={{ color: "#989898" }}>Suggestions For You</h5>
        <h5 style={{ marginLeft: 52 }}>See All</h5>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            sx={{ border: 1, borderColor: "#DBDBDB" }}
            alt="Travis Howard"
            src={avatar}
          />
          <Typography
            sx={{ ml: 2, fontSize: 14, fontWeight: 600, mt: 1 }}
            variant="h6"
            component="h6"
          >
            Raton
          </Typography>
        </Box>
        <Box sx={{ mt: -0.5, color: "#28A5F6" }}>
          <p style={{ fontSize: 14, fontWeight: 600 }}>Follow</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Suggestions;
