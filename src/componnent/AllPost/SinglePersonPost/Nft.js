import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import 'emoji-mart/css/emoji-mart.css';
import AllComment from '../AllComment/AllComment';
import { Axios } from '../../../core/axios';

const Nft = ({ nft }) => {
	console.log(nft);
	const [open, setOpen] = useState(false);
	const [isLiked, setLiked] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [comment, setComment] = useState('');

	const handleComment = async (e) => {
		e.preventDefault();

		try {
			await Axios.post(`/assets/${nft._id}/comments`, {
				theComment: comment,
			});

			setComment('');
		} catch (error) {
			alert(error.message);
		}
	};

	const handleLike = async () => {
		try {
			await Axios.put(`/assets/reaction/${nft._id}`);
			setLiked(!isLiked);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<Box sx={{ border: 1, borderColor: '#DBDBDB', mt: 5, mb: 5, p: 1 }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					p: 2,
					borderBottom: 1,
					borderColor: '#DBDBDB',
					mb: 2,
				}}
			>
				<Avatar
					sx={{ border: 1, borderColor: '#DBDBDB' }}
					alt={nft.author.name}
					src={nft.author.avatar}
				/>
				<Typography
					sx={{ ml: 2, mt: 1, fontSize: 14, fontWeight: 600 }}
					variant="h6"
					component="h6"
				>
					{nft.author.name}
				</Typography>
			</Box>
			<Box xs={12} className="postImgGrid">
				<img className="postImg" src={nft.imgUrl} alt="" />
			</Box>
			<Box sx={{ display: 'flex' }}>
				<FavoriteBorderIcon
					onClick={handleLike}
					sx={{
						pl: 2,
						pt: 2,
						pr: 2,
						ml: 1,
						fontSize: 29,
						color: isLiked ? 'red' : 'black',
					}}
				></FavoriteBorderIcon>
				<CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
			</Box>
			<Box>
				<p style={{ fontSize: 15, marginLeft: 28, fontWeight: 600 }}>
					{nft.numberOfLoves} Likes
				</p>
				<p
					style={{
						fontSize: 15,
						marginLeft: 28,
						fontWeight: 600,
						color: '#989898',
						cursor: 'pointer',
					}}
					onClick={handleOpen}
				>
					View All {nft.numberOfComments} comment
				</p>
			</Box>
			<AllComment open={open} nft={nft} handleClose={handleClose}></AllComment>
			<Box sx={{ borderTop: 1, color: '#DBDBDB' }}>
				<form className="reactions" onSubmit={handleComment}>
					{/* <Picker showPreview={false} showSkinTones={false} /> */}

					<TextField
						sx={{ width: '80%', p: 1 }}
						placeholder="Please enter text"
						variant="standard"
						InputProps={{ disableUnderline: true }}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button type="submit" variant="text" sx={{ width: 20, ml: 2, mt: 1 }}>
						Post
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default Nft;
