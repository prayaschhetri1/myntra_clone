import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequereAuth from "./AuthContext/RequereAuth";
import Bag from "./components/Bag/Bag";
import Empty from "./components/Bag/Empty";
import Beuty from "./components/beuty/Beuty";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Kids from "./components/kids/Kids";
import Living from "./components/living/Living";
import Mens from "./components/men/Mens";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import SignUp from "./components/profile/SignUp";
import SearchReq from "./components/search/SearchReq";
import Studio from "./components/studio/Studio";
import WishList from "./components/wishlist/WishList";
import Women from "./components/women/Women";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="men" element={<Mens />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="living" element={<Living />} />
        <Route path="beuty" element={<Beuty />} />
        <Route path="studio" element={<Studio />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/search" element={<WishList />} />
        <Route path="bag" element={<RequereAuth><Bag /></RequereAuth>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/empty" element={<Empty/>} />
        <Route path="/address" element={<Checkout/>} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
