import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import gif from "../../../img/nftGifgif.gif";
import nft1 from "../../../img/nft1.png";
import nft2 from "../../../img/nft2.png";
import "./SinglePersonPost.css";
import "emoji-mart/css/emoji-mart.css";
// import { Picker } from "emoji-mart";
import Modal from "@mui/material/Modal";
import AllComment from "../AllComment/AllComment";

const SinglePersonPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ border: 1, borderColor: "#DBDBDB", mt: 5, mb: 5, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            borderBottom: 1,
            borderColor: "#DBDBDB",
            mb: 2,
          }}
        >
          <Avatar
            sx={{ border: 1, borderColor: "#DBDBDB" }}
            alt="Travis Howard"
            src={gif}
          />
          <Typography
            sx={{ ml: 2, mt: 1, fontSize: 14, fontWeight: 600 }}
            variant="h6"
            component="h6"
          >
            Raton
          </Typography>
        </Box>
        <Box xs={12} className="postImgGrid">
          <img className="postImg" src={gif} alt="" />
        </Box>
        <Box sx={{ display: "flex" }}>
          <FavoriteBorderIcon
            sx={{ pl: 2, pt: 2, pr: 2, ml: 1, fontSize: 29 }}
          ></FavoriteBorderIcon>
          <CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
        </Box>
        <Box>
          <p style={{ fontSize: 15, marginLeft: 28, fontWeight: 600 }}>
            11 Likes
          </p>
          <p
            style={{
              fontSize: 15,
              marginLeft: 28,
              fontWeight: 600,
              color: "#989898",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            View All 1 comment
          </p>
        </Box>
        <AllComment open={open} handleClose={handleClose}></AllComment>
        <Box sx={{ borderTop: 1, color: "#DBDBDB" }}>
          <form className="reactions" action="">
            {/* <Picker showPreview={false} showSkinTones={false} /> */}

            <TextField
              sx={{ width: "80%", p: 1 }}
              placeholder="Please enter text"
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <Button variant="text" sx={{ width: 20, ml: 2, mt: 1 }}>
              Post
            </Button>
          </form>
        </Box>
      </Box>
      <Box sx={{ border: 1, borderColor: "#DBDBDB", mt: 5, mb: 5, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            borderBottom: 1,
            borderColor: "#DBDBDB",
            mb: 2,
          }}
        >
          <Avatar
            sx={{ border: 1, borderColor: "#DBDBDB" }}
            alt="Travis Howard"
            src={gif}
          />
          <Typography
            sx={{ ml: 2, mt: 1, fontSize: 14, fontWeight: 600 }}
            variant="h6"
            component="h6"
          >
            Raton
          </Typography>
        </Box>
        <Box xs={12} className="postImgGrid">
          <img className="postImg" src={nft1} alt="" />
        </Box>

        <Box sx={{ display: "flex" }}>
          <FavoriteBorderIcon
            sx={{ pl: 2, pt: 2, pr: 2, ml: 1, fontSize: 29 }}
          ></FavoriteBorderIcon>
          <CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
        </Box>
        <Box>
          <p style={{ fontSize: 15, marginLeft: 28, fontWeight: 600 }}>
            11 Likes
          </p>
          <p
            style={{
              fontSize: 15,
              marginLeft: 28,
              fontWeight: 600,
              color: "#989898",
            }}
            onClick={handleOpen}
          >
            View 1 comment
          </p>
        </Box>
        <Box sx={{ borderTop: 1, color: "#DBDBDB" }}>
          <form action="">
            <TextField
              sx={{ width: "80%", p: 1 }}
              placeholder="Please enter text"
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <Button variant="text" sx={{ width: 20, ml: 2, mt: 1 }}>
              Post
            </Button>
          </form>
        </Box>
      </Box>
      <Box sx={{ border: 1, borderColor: "#DBDBDB", mt: 5, mb: 5, p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            borderBottom: 1,
            borderColor: "#DBDBDB",
            mb: 2,
          }}
        >
          <Avatar
            sx={{ border: 1, borderColor: "#DBDBDB" }}
            alt="Travis Howard"
            src={gif}
          />
          <Typography
            sx={{ ml: 2, mt: 1, fontSize: 14, fontWeight: 600 }}
            variant="h6"
            component="h6"
          >
            Raton
          </Typography>
        </Box>
        <Box xs={12} className="postImgGrid">
          <img className="postImg" src={nft2} alt="" />
        </Box>
        <Box sx={{ display: "flex" }}>
          <FavoriteBorderIcon
            sx={{ pl: 2, pt: 2, pr: 2, ml: 1, fontSize: 29 }}
          ></FavoriteBorderIcon>
          <CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
        </Box>
        <Box>
          <p style={{ fontSize: 15, marginLeft: 28, fontWeight: 600 }}>
            11 Likes
          </p>
          <p
            style={{
              fontSize: 15,
              marginLeft: 28,
              fontWeight: 600,
              color: "#989898",
            }}
          >
            View 1 comment
          </p>
        </Box>
        <Box sx={{ borderTop: 1, color: "#DBDBDB" }}>
          <form action="">
            <TextField
              sx={{ width: "80%", p: 1 }}
              placeholder="Please enter text"
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <Button variant="text" sx={{ width: 20, ml: 2, mt: 1 }}>
              Post
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SinglePersonPost;
