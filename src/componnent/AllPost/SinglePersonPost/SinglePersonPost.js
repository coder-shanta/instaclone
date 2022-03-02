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
import Nft from './Nft';

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
				posts.map((post, idx) => <Nft nft={post} key={idx} />)
			)}
		</>
	);
};

export default SinglePersonPost;
