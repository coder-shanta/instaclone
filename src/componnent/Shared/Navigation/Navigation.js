import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { useAuth } from '../../../contexts/AuthContext';
import { connectWallet } from '../../../core';

const Navigation = () => {
	const { user } = useAuth();

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
	}));

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Link to="/profile" style={{ textDecoration: 'none', color: '#212121' }}>
				<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			</Link>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	const handleLogin = async () => {
		if (typeof window.ethereum === 'undefined') {
			window.open('https://metamask.io/download/');
		} else {
			try {
				const user = await connectWallet();
				localStorage.setItem('user', JSON.stringify(user));
				window.location.href = '/';
			} catch (error) {
				alert(error.message);
			}
		}
	};

	return (
		<Box sx={{ flexGrow: 1, mb: 10 }}>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: 'white',
					color: 'black',
					boxShadow: 0,
					borderBottom: 1,
					borderColor: '#DBDBDB',
				}}
			>
				<Container maxWidth="md">
					<Toolbar>
						<Typography variant="h6" noWrap component="div">
							<Link
								to="/home"
								style={{ textDecoration: 'none', color: '#212121' }}
								className="logoFont"
							>
								Nifti.wtf
							</Link>
						</Typography>

						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Box sx={{ mt: 0.5, display: { xs: 'block' } }}>
								<Search
									sx={{
										backgroundColor: '#EFEFEF',
										'&:hover': { backgroundColor: '#EFEFEF' },
										borderRadius: 2,
										mr: 10,
										display: { xs: 'block' },
									}}
								>
									<SearchIconWrapper>
										<SearchIcon sx={{ color: '#8e8e8e' }} />
									</SearchIconWrapper>
									<StyledInputBase
										placeholder="Search…"
										inputProps={{ 'aria-label': 'search' }}
									/>
								</Search>
							</Box>

							{user ? (
								<>
									<IconButton
										size="large"
										aria-label="show 4 new mails"
										color="inherit"
									>
										<Badge badgeContent={4} color="error">
											<MailIcon />
										</Badge>
									</IconButton>
									<IconButton
										size="large"
										aria-label="show 17 new notifications"
										color="inherit"
									>
										<Badge badgeContent={17} color="error">
											<NotificationsIcon />
										</Badge>
									</IconButton>
									<IconButton
										size="large"
										edge="end"
										aria-label="account of current user"
										aria-controls={menuId}
										aria-haspopup="true"
										onClick={handleProfileMenuOpen}
										color="inherit"
									>
										<AccountCircle />
									</IconButton>
								</>
							) : (
								<Button onClick={handleLogin}>Connect Wallet</Button>
							)}
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							{user ? (
								<IconButton
									size="large"
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit"
								>
									<MoreIcon />
								</IconButton>
							) : (
								<Button>Connect Wallet</Button>
							)}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};

export default Navigation;
