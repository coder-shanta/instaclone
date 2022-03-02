import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './componnent/Home/Home';
import Navigation from './componnent/Shared/Navigation/Navigation';
import UserProfile from './componnent/UserProfile/UserProfile';
import AuthProvider from './contexts/AuthContext';
function App() {
	return (
		<AuthProvider>
			<BrowserRouter sx={{ backgroundColor: '#FAFAFA' }}>
				<Navigation />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" index element={<Home />} />
					<Route path="/profile" element={<UserProfile />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
