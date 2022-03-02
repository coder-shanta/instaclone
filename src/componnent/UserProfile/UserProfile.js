import React, { useState, useEffect } from 'react';
import {
	Avatar,
	Box,
	Container,
	Grid,
	Button,
	LinearProgress,
} from '@mui/material';
import nft2 from '../../img/nft2.png';

import { Axios } from '../../core/axios';
// import { useAuth } from '../../contexts/AuthContext';

const UserProfile = () => {
	// const { user } = useAuth();

	const user = JSON.parse(localStorage.getItem('user'));

	const [posts, setPosts] = useState([]);
	const [isLoading, setLoading] = useState(true);

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

	const syncNfts = async () => {
		try {
			setLoading(true);
			const { data } = await Axios.post('/assets/queue');

			setLoading(false);
			alert(data.message);
		} catch (error) {
			setLoading(false);
			alert(error.message);
		}
	};

	useEffect(() => {
		loadPosts();
	}, []);

	return (
		<Container maxWidth="md" sx={{ mt: 12, mb: 5 }}>
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

			<Box
				sx={{
					display: { xs: 'block', md: 'flex' },
					borderBottom: 1,
					borderColor: '#DBDBDB',
				}}
			>
				<Avatar
					alt="Remy Sharp"
					src={user.avatar}
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
						{user.name}
					</p>
					<Box sx={{ display: { xs: 'block', md: 'flex' }, pb: 4 }} xs={12}>
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

					<Box sx={{ display: { xs: 'block', md: 'flex' }, pb: 4 }} xs={12}>
						<Button onClick={syncNfts}>Sync NFTs</Button>
					</Box>
				</Box>
			</Box>

			<Box>
				<h2 style={{ fontSize: 20, fontWeight: 600 }}>Post</h2>
				<Grid container spacing={2}>
					{posts.length === 0 && !isLoading ? (
						<div>
							<h1>Nothing to display.</h1>
						</div>
					) : (
						posts.map((post, idx) => (
							<Grid item md={4}>
								<img
									src={post.imgUrl}
									width={270}
									height={300}
									alt={post.name}
								/>
							</Grid>
						))
					)}
				</Grid>
			</Box>
		</Container>
	);
};

export default UserProfile;
