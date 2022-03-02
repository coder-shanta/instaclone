import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, LinearProgress } from '@mui/material';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import './SinglePersonPost.css';
import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from "emoji-mart";
import Modal from '@mui/material/Modal';
import AllComment from '../AllComment/AllComment';
import { Axios } from '../../../core/axios';

const SinglePersonPost = () => {
	const [open, setOpen] = useState(false);
	const [posts, setPosts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const loadPosts = async () => {
		try {
			const { data } = await Axios.get('/assets/feed');

			setPosts(data.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			alert(error.message);
		}
	};

	useEffect(() => {
		loadPosts();
	}, []);

	return (
		<>
			{isLoading && (
				<div
					style={{
						position: 'fixed',
						width: '100%',
						top: 0,
						left: 0,
						right: 0,
						zIndex: 99999,
					}}
				>
					<LinearProgress color="error" />
				</div>
			)}

			{posts.length === 0 && !isLoading ? (
				<div>
					<h1>Nothing to display.</h1>
				</div>
			) : (
				posts.map((post, idx) => (
					<Box
						key={idx}
						sx={{ border: 1, borderColor: '#DBDBDB', mt: 5, mb: 5, p: 1 }}
					>
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
								alt={post.author.name}
								src={post.author.avatar}
							/>
							<Typography
								sx={{ ml: 2, mt: 1, fontSize: 14, fontWeight: 600 }}
								variant="h6"
								component="h6"
							>
								{post.author.name}
							</Typography>
						</Box>
						<Box xs={12} className="postImgGrid">
							<img className="postImg" src={post.imgUrl} alt="" />
						</Box>
						<Box sx={{ display: 'flex' }}>
							<FavoriteBorderIcon
								sx={{ pl: 2, pt: 2, pr: 2, ml: 1, fontSize: 29 }}
							></FavoriteBorderIcon>
							<CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
						</Box>
						<Box>
							<p style={{ fontSize: 15, marginLeft: 28, fontWeight: 600 }}>
								{post.numberOfLoves} Likes
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
								View All {post.numberOfComments} comment
							</p>
						</Box>
						<AllComment open={open} handleClose={handleClose}></AllComment>
						<Box sx={{ borderTop: 1, color: '#DBDBDB' }}>
							<form className="reactions" action="">
								{/* <Picker showPreview={false} showSkinTones={false} /> */}

								<TextField
									sx={{ width: '80%', p: 1 }}
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
				))
			)}
		</>
	);
};

export default SinglePersonPost;
