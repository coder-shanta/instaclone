import { Avatar, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { Axios } from '../../../core/axios';
import { useAuth } from '../../../contexts/AuthContext';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	borderRadius: 1,
	boxShadow: 24,
	outline: 'none',
	p: 4,
	width: 900,
};

const AllComment = ({ open, nft, handleClose }) => {
	const { user } = useAuth();

	const [comments, setComments] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [comment, setComment] = useState('');

	const handleComment = async (e) => {
		e.preventDefault();

		try {
			await Axios.post(`/assets/${nft._id}/comments`, {
				theComment: comment,
			});

			const com = {
				author: {
					name: user.name,
				},
				text: comment,
			};

			setComments([...comments, com]);

			setComment('');
		} catch (error) {
			alert(error.message);
		}
	};

	const loadComments = async () => {
		try {
			const { data } = await Axios.get(`/assets/${nft._id}/comments`);

			setComments(data.comments);
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		loadComments();
	}, []);

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box sx={{ display: 'flex', alignItems: 'space-between' }}>
						<Box xs={12} md={6}>
							<img src={nft.imgUrl} width={500} alt="" />
						</Box>
						<Box xs={12} md={6} sx={{ ml: 5 }}>
							<Box sx={{ borderBottom: 1, borderColor: '#DBDBDB', pb: 1 }}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-start',
									}}
								>
									<Avatar
										sx={{ border: 1, borderColor: '#DBDBDB' }}
										alt="Travis Howard"
										src={nft.author.avatar}
									/>
									<Typography
										sx={{ ml: 2, fontSize: 14, fontWeight: 600, mt: 1 }}
										variant="h6"
										component="h6"
									>
										{nft.author.name}
									</Typography>
								</Box>
							</Box>

							<Box sx={{ mt: 3 }}>
								{comments.map((item, idx) => (
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'flex-start',
										}}
									>
										<Avatar
											sx={{
												border: 1,
												borderColor: '#DBDBDB',
												width: 24,
												height: 24,
											}}
											alt="Travis Howard"
											src={nft.author.avatar}
										/>
										<Typography
											sx={{ ml: 2, fontSize: 13, fontWeight: 600 }}
											variant="h6"
											component="h6"
										>
											{item.author.name}
										</Typography>
										<Typography
											sx={{
												ml: 2,
												fontSize: 13,

												fontWeight: 300,
											}}
										>
											{item.text}
										</Typography>
									</Box>
								))}

								<Box sx={{ position: 'fixed', bottom: 0, pb: 3 }}>
									<Box
										sx={{
											display: 'flex',
											borderTop: 1,
											borderColor: '#DBDBDB',
											mt: 1,
										}}
									>
										<FavoriteBorderIcon
											sx={{ pt: 2, pr: 2, fontSize: 29 }}
										></FavoriteBorderIcon>
										<CommentIcon sx={{ pt: 2, fontSize: 29 }}></CommentIcon>
									</Box>
									<Box>
										<p style={{ fontSize: 15, fontWeight: 600 }}>
											{nft.numberOfLoves} Likes
										</p>
									</Box>
									<Box sx={{ borderTop: 1, color: '#DBDBDB' }}>
										<form sx={{ display: 'flex' }} onSubmit={handleComment}>
											<TextField
												sx={{ width: '50%', p: 1 }}
												placeholder="Please enter text"
												variant="standard"
												InputProps={{ disableUnderline: true }}
												value={comment}
												onChange={(e) => setComment(e.target.value)}
											/>
											<Button
												type="submit"
												variant="text"
												sx={{ width: 10, mt: 1 }}
											>
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
