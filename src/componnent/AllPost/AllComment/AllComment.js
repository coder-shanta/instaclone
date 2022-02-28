import { Avatar, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import gif from "../../../img/nftGifgif.gif";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
  outline: "none",
  p: 4,
  width: 900,
};

const AllComment = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", alignItems: "space-between" }}>
            <Box xs={12} md={6}>
              <img src={gif} width={500} alt="" />
            </Box>
            <Box xs={12} md={6} sx={{ ml: 5 }}>
              <Box sx={{ borderBottom: 1, borderColor: "#DBDBDB", pb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar
                    sx={{ border: 1, borderColor: "#DBDBDB" }}
                    alt="Travis Howard"
                    src={gif}
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
              <Box sx={{ mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar
                    sx={{
                      border: 1,
                      borderColor: "#DBDBDB",
                      width: 24,
                      height: 24,
                    }}
                    alt="Travis Howard"
                    src={gif}
                  />
                  <Typography
                    sx={{ ml: 2, fontSize: 13, fontWeight: 600 }}
                    variant="h6"
                    component="h6"
                  >
                    Raton
                  </Typography>
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: 13,

                      fontWeight: 300,
                    }}
                  >
                    Nice Picture
                  </Typography>
                </Box>
                <Box sx={{ position: "fixed", bottom: 0, pb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      borderTop: 1,
                      borderColor: "#DBDBDB",
                      mt: 1,
                    }}
                  >
                    <FavoriteBorderIcon
                      sx={{ pt: 2, pr: 2, fontSize: 29 }}
                    ></FavoriteBorderIcon>
                    <CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
                  </Box>
                  <Box>
                    <p style={{ fontSize: 15, fontWeight: 600 }}>11 Likes</p>
                  </Box>
                  <Box sx={{ borderTop: 1, color: "#DBDBDB" }}>
                    <form action="" sx={{ display: "flex" }}>
                      <TextField
                        sx={{ width: "50%", p: 1 }}
                        placeholder="Please enter text"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                      />
                      <Button variant="text" sx={{ width: 10, mt: 1 }}>
                        Post
                      </Button>
                    </form>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AllComment;
