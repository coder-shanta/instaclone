import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componnent/Home/Home";
import Navigation from "./componnent/Shared/Navigation/Navigation";
import UserProfile from "./componnent/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter sx={{ backgroundColor: "#FAFAFA" }}>
      <Navigation></Navigation>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
