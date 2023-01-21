import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search"
import Message from "./pages/Message"
import Notification from "./pages/Notification"
import Profile from "./pages/Profile"
import Setting from "./pages/Setting"
import UserInfo from "./components/userprofile/UserInfo"
import Sidebar from "./components/SideBar"
import userProfile from "./components/Post Card/UserProfile";

const App =() => {

  return (
      <>
      
      <div className="relative flex">
      <Sidebar />
      
    <div className="w-[55rem]  flex flex-col bg-gradient-to-br from-white to-[#ffffff]">
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
              <Route path="/search/:searchTerm" element={<Search />} />
               <Route path="/message" element={<Message />} />
               <Route path="/notification" element={<Notification />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
      </div>
      {/* <div class="relative h-36 w-[2rem]">
  <div class="absolute  w-0 ...">
   <UserInfo />
  </div>
</div> */}
<UserInfo />
      </div>
      
      </>
  )
}
export default App;
